import React from "react";
import styles from "./CheckoutBadge.module.css";
import { LineItem } from "types";
import { useCheckoutPlanByDuration } from "hooks";

export interface Props {
  lineItems: LineItem[];
}

export const CheckoutBadge: React.FC<Props> = ({ lineItems }) => {
  const checkoutPlanByDuration = useCheckoutPlanByDuration(lineItems);

  console.log(checkoutPlanByDuration);

  return <p className={styles.badge}>CheckoutBadge</p>;
};
