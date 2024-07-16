import React from "react";
import { SessionLineItem } from "types";
export interface Props {
    retailerId: string;
    lineItems: SessionLineItem[];
}
export declare const CheckoutBadge: React.FC<Props>;
