import React from "react";
import styles from "./CheckoutBadge.module.css";
import { LineItem } from "types";

export interface Props {
  lineItems: LineItem[];
}

export const CheckoutBadge: React.FC<Props> = ({ lineItems }) => {
  console.log(lineItems);

  return <p className={styles.badge}>CheckoutBadge</p>;
};
