import React from "react";
import styles from "./Skeleton.module.css";

interface Props {
  width: number;
  height: number;
  radius?: number;
}

export const Skeleton: React.FC<Props> = ({ width, height, radius = 0 }) => (
  <div
    className={styles.skeleton}
    style={{ width, height, borderRadius: radius }}
  />
);
