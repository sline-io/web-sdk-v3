import React from "react";
import styles from "./Skeleton.module.css";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  width: number;
  height: number;
  radius?: number;
}

export const Skeleton: React.FC<Props> = ({
  width,
  height,
  radius = 0,
  className,
  style,
  ...props
}) => (
  <div
    className={styles.skeleton + (className ? " " + className : "")}
    style={{ width, height, borderRadius: radius, ...style }}
    {...props}
  />
);
