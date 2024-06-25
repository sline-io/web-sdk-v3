import React, { useMemo } from "react";
import styles from "./Chip.module.css";

interface Props {
  value: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Chip: React.FC<Props> = ({ value, checked, label, onChange }) => {
  const name = useMemo(() => String(Math.round(Math.random() * 1000000)), []);

  return (
    <div data-checked={checked ? "" : undefined} className={styles.chip}>
      <input
        type="radio"
        id={`${name}-${value}`}
        name={name}
        value={value}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        hidden
      />
      <label className={styles.label} htmlFor={`${name}-${value}`}>
        {label}
      </label>
    </div>
  );
};
