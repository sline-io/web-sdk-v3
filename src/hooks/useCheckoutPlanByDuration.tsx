import { useEffect, useState } from "react";
import { apiClient, createPlans } from "services/api";
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
  const lineItemsWithPlans = await createPlans(
    pendingLineItemsPlansRequest.flatMap(({ lineItems }) => lineItems)
  );

  lineItemsWithPlans.forEach(
    (lineItemWithPlans) =>
      (lineItemWithPlansByHash[hashLineItem(lineItemWithPlans)] =
        lineItemWithPlans)
  );

  pendingLineItemsPlansRequest.forEach(({ lineItems, resolve }) => {
    resolve(
      lineItems.map(
        (lineItem) => lineItemWithPlansByHash[hashLineItem(lineItem)]
      )
    );
  });
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

const buildCheckoutPlanByDuration = (
  lineItemsWithPlans: LineItemWithPlans[]
) => {
  const checkoutPlanByDuration: Record<number, CheckoutPlan> = {};

  lineItemsWithPlans.forEach((lineItemWithPlans) => {
    lineItemWithPlans.plans.forEach((lineItemPlan) => {
      if (!(lineItemPlan.duration in checkoutPlanByDuration)) {
        checkoutPlanByDuration[lineItemPlan.duration] = {
          firstInstalmentWithTax: 0,
          otherInstalmentWithTax: 0,
        };
      }

      checkoutPlanByDuration[lineItemPlan.duration].firstInstalmentWithTax +=
        lineItemPlan.first_instalment_with_tax;
      checkoutPlanByDuration[lineItemPlan.duration].otherInstalmentWithTax +=
        lineItemPlan.other_instalment_with_tax;
    });
  });

  return checkoutPlanByDuration;
};

type CheckoutPlan = {
  firstInstalmentWithTax: number;
  otherInstalmentWithTax: number;
};

export const useCheckoutPlanByDuration = (lineItems: LineItem[]) => {
  const [checkoutPlanByDuration, setCheckoutPlanByDuration] =
    useState<Record<number, CheckoutPlan>>();

  useEffect(() => {
    if (
      lineItems.every(
        (lineItem) => hashLineItem(lineItem) in lineItemWithPlansByHash
      )
    ) {
      setCheckoutPlanByDuration(
        buildCheckoutPlanByDuration(
          lineItems.map(
            (lineItem) => lineItemWithPlansByHash[hashLineItem(lineItem)]
          )
        )
      );
      return;
    }

    createLineItemsPlans(lineItems).then((lineItemsWithPlans) =>
      setCheckoutPlanByDuration(buildCheckoutPlanByDuration(lineItemsWithPlans))
    );
  }, [lineItems]);

  return checkoutPlanByDuration;
};
