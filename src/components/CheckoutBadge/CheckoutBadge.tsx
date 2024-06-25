import React, { useMemo, useState } from "react";
import styles from "./CheckoutBadge.module.css";
import { LineItem } from "types";
import { useCheckoutPlans } from "hooks";
import { SlineLogo } from "../SlineLogo";
import { Skeleton } from "../Skeleton";
import { Chip } from "../Chip";
import { formatPrice } from "utils";

export interface Props {
  lineItems: LineItem[];
}

export const CheckoutBadge: React.FC<Props> = ({ lineItems }) => {
  const checkoutPlans = useCheckoutPlans(lineItems);
  const [selectedDuration, setSelectedDuration] = useState<number>();

  const selectedCheckoutPlan = useMemo(() => {
    if (!checkoutPlans) return undefined;

    return checkoutPlans.find(
      ({ duration }, index) =>
        (selectedDuration === undefined && index === 0) ||
        duration === selectedDuration
    );
  }, [checkoutPlans, selectedDuration]);

  if (!checkoutPlans)
    return (
      <div className={styles.badge}>
        <div className={styles.top_bar}>
          <SlineLogo />

          <Skeleton height={24} width={60} radius={4} />
          <Skeleton height={24} width={60} radius={4} />
          <Skeleton height={24} width={60} radius={4} />
        </div>

        <div className={styles.bottom_bar}>
          <Skeleton height={20} width={250} radius={4} />
          <Skeleton height={24} width={60} radius={4} />
        </div>
      </div>
    );

  if (!selectedCheckoutPlan) throw Error("No checkout plans.");

  console.log(formatPrice(selectedCheckoutPlan.firstInstalmentWithTax));

  return (
    <div className={styles.badge}>
      <div className={styles.top_bar}>
        <SlineLogo />

        {checkoutPlans.map(({ duration }, index) => (
          <Chip
            key={String(duration)}
            value={String(duration)}
            label={duration === -1 ? "Sans engagement" : `${duration} mois`}
            checked={
              (selectedDuration === undefined && index === 0) ||
              selectedDuration === duration
            }
            onChange={(checked) => checked && setSelectedDuration(duration)}
          />
        ))}
      </div>

      <div className={styles.bottom_bar}>
        <p
          className={styles.price}
          dangerouslySetInnerHTML={{
            __html: `${formatPrice(
              selectedCheckoutPlan.firstInstalmentWithTax
            )} puis ${formatPrice(
              selectedCheckoutPlan.otherInstalmentWithTax
            )} par mois`,
          }}
        />
      </div>
    </div>
  );
};
