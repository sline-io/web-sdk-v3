import React from "react";
import styles from "./CheckoutBadge.module.css";
import { sum } from "utils";

export const CheckoutBadge: React.FC = () => {
  return <p className={styles.badge}>Sum: {sum(10, 5)}</p>;
};
