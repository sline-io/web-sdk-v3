import React from "react";
interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    loading: boolean;
}
export declare const Button: React.FC<Props>;
export {};
