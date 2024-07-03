import React from "react";
import styles from "./Button.module.css";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading: boolean;
}

export const Button: React.FC<Props> = ({ loading, className, ...props }) => (
  <button
    className={styles.button + (className ? " " + className : "")}
    {...props}
    data-loading={loading ? "true" : undefined}
  />
);
