import React from "react";
import styles from "./CheckoutBadge.module.css";
import { sum } from "utils";

interface Props {
  x: number;
  y: number;
}

export const CheckoutBadge: React.FC<Props> = ({ x, y }) => {
  return <p className={styles.badge}>Sum: {sum(x, y)}</p>;
};
