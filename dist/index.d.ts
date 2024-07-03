import { CheckoutBadgeProps } from "./components";
import { SessionAddress, SessionCustomer } from "types";
type InitializeOptions = {
    clientId: string;
    clientSecret: string;
    test?: boolean;
};
export declare const initialize: ({ clientId, clientSecret, test, }: InitializeOptions) => void;
export declare const addCheckoutBadge: (containerId: string, props: CheckoutBadgeProps) => void;
export declare const removeCheckoutBadge: (containerId: string) => void;
export declare const setCustomer: (customer: SessionCustomer | undefined) => SessionCustomer | undefined;
export declare const setShippingAddress: (shippingAddress: SessionAddress | undefined) => SessionAddress | undefined;
export declare const setBillingAddress: (billingAddress: SessionAddress | undefined) => SessionAddress | undefined;
export {};
