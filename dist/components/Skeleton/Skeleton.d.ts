import React from "react";
interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    width: number;
    height: number;
    radius?: number;
}
export declare const Skeleton: React.FC<Props>;
export {};
