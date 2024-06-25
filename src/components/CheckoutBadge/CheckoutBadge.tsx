import React, { useState } from "react";
import styles from "./CheckoutBadge.module.css";
import { LineItem } from "types";
import { useCheckoutPlanByDuration } from "hooks";
import { SlineLogo } from "../SlineLogo";
import { Skeleton } from "../Skeleton";
import { Chip } from "../Chip";

export interface Props {
  lineItems: LineItem[];
}

export const CheckoutBadge: React.FC<Props> = ({ lineItems }) => {
  const checkoutPlanByDuration = useCheckoutPlanByDuration(lineItems);
  const [selectedDuration, setSelectedDuration] = useState<number>();

  if (!checkoutPlanByDuration)
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

  return (
    <div className={styles.badge}>
      <div className={styles.top_bar}>
        <SlineLogo />

        {Object.keys(checkoutPlanByDuration).map((duration, index) => (
          <Chip
            value={duration}
            label={duration === "-1" ? "Sans engagement" : `${duration} mois`}
            checked={
              (selectedDuration === undefined && index === 0) ||
              selectedDuration === Number(duration)
            }
            onChange={(checked) =>
              checked && setSelectedDuration(Number(duration))
            }
          />
        ))}
      </div>
    </div>
  );
};
