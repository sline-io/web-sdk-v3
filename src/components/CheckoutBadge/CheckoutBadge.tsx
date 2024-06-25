import React from "react";
import styles from "./CheckoutBadge.module.css";
import { LineItem } from "types";
import { useCheckoutPlanByDuration } from "hooks";
import { SlineLogo } from "../SlineLogo";
import { Skeleton } from "components/Skeleton";

export interface Props {
  lineItems: LineItem[];
}

export const CheckoutBadge: React.FC<Props> = ({ lineItems }) => {
  const checkoutPlanByDuration = useCheckoutPlanByDuration(lineItems);

  if (!checkoutPlanByDuration)
    return (
      <div className={styles.badge}>
        <div className={styles.top_bar}>
          <SlineLogo />

          <Skeleton height={24} width={24} radius={4} />
          <Skeleton height={24} width={24} radius={4} />
          <Skeleton height={24} width={24} radius={4} />
        </div>

        <div className={styles.bottom_bar}>
          <Skeleton height={20} width={200} radius={4} />
          <Skeleton height={24} width={60} radius={4} />
        </div>
      </div>
    );

  return (
    <div className={styles.badge}>
      <div className={styles.top_bar}>
        <SlineLogo />
      </div>
    </div>
  );
};
