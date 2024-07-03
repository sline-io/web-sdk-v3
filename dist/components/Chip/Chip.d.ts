import React from "react";
interface Props extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type" | "id" | "name" | "value" | "onChange" | "hidden"> {
    value: string;
    label: string;
    onChange: (checked: boolean) => void;
}
export declare const Chip: React.FC<Props>;
export {};
