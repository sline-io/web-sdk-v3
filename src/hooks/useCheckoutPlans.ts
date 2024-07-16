import { useEffect, useState } from "react";
import { createPlans } from "services/api";
import { LineItem, LineItemWithPlans } from "types";
import { hashLineItem } from "utils";

const lineItemWithPlansByHash: Record<string, LineItemWithPlans> = {};

type LineItemsPlansRequest = {
  lineItems: LineItem[];
  resolve: (lineItemsWithPlans: LineItemWithPlans[]) => void;
};
const pendingLineItemsPlansRequest: LineItemsPlansRequest[] = [];
let handlePendingLineItemsWithPlansTimeout: number | undefined;
const DEBOUNCE_DELAY = 500;

const handlePendingLineItemsWithPlans = async () => {
  const lineItems = pendingLineItemsPlansRequest.flatMap(
    ({ lineItems }) => lineItems
  );
  const lineItemsWithPlans = await createPlans(lineItems);

  lineItemsWithPlans.forEach(
    (lineItemWithPlans, index) =>
      (lineItemWithPlansByHash[hashLineItem(lineItems[index])] =
        lineItemWithPlans)
  );

  pendingLineItemsPlansRequest.forEach(({ lineItems, resolve }) => {
    resolve(
      lineItems.map(
        (lineItem) => lineItemWithPlansByHash[hashLineItem(lineItem)]
      )
    );
  });

  pendingLineItemsPlansRequest.splice(0, pendingLineItemsPlansRequest.length);
  handlePendingLineItemsWithPlansTimeout = undefined;
};

const createLineItemsPlans = (
  lineItems: LineItem[]
): Promise<LineItemWithPlans[]> =>
  new Promise((resolve) => {
    pendingLineItemsPlansRequest.push({ lineItems, resolve });

    if (!handlePendingLineItemsWithPlansTimeout) {
      handlePendingLineItemsWithPlansTimeout = setTimeout(
        handlePendingLineItemsWithPlans,
        DEBOUNCE_DELAY
      );
    }
  });

const buildCheckoutPlans = (lineItemsWithPlans: LineItemWithPlans[]) => {
  const checkoutPlans: CheckoutPlan[] = [];

  lineItemsWithPlans.forEach((lineItemWithPlans) => {
    lineItemWithPlans.plans.forEach((lineItemPlan) => {
      if (
        !checkoutPlans.some(
          ({ duration }) => duration === lineItemPlan.duration
        )
      ) {
        checkoutPlans.push({
          duration: lineItemPlan.duration,
          firstInstalmentWithTax: 0,
          otherInstalmentWithTax: 0,
        });
      }

      const checkoutPlan = checkoutPlans.find(
        ({ duration }) => duration === lineItemPlan.duration
      );

      if (!checkoutPlan) throw Error("Checkout plan should be defined.");

      checkoutPlan.firstInstalmentWithTax +=
        lineItemPlan.first_instalment_with_tax;
      checkoutPlan.otherInstalmentWithTax +=
        lineItemPlan.other_instalment_with_tax;
    });
  });

  return checkoutPlans;
};

type CheckoutPlan = {
  duration: number;
  firstInstalmentWithTax: number;
  otherInstalmentWithTax: number;
};

export const useCheckoutPlans = (lineItems: LineItem[]) => {
  const [checkoutPlans, setCheckoutPlans] = useState<CheckoutPlan[]>();

  useEffect(() => {
    if (
      lineItems.every(
        (lineItem) => hashLineItem(lineItem) in lineItemWithPlansByHash
      )
    ) {
      setCheckoutPlans(
        buildCheckoutPlans(
          lineItems.map(
            (lineItem) => lineItemWithPlansByHash[hashLineItem(lineItem)]
          )
        )
      );
      return;
    }

    createLineItemsPlans(lineItems).then((lineItemsWithPlans) =>
      setCheckoutPlans(buildCheckoutPlans(lineItemsWithPlans))
    );
  }, [lineItems]);

  return checkoutPlans;
};
