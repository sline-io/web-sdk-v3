type InitializeOptions = {
    clientId: string;
    clientSecret: string;
    test?: boolean;
};
export declare const initialize: ({ clientId, clientSecret, test, }: InitializeOptions) => void;
export declare const addCheckoutBadge: (containerId: unknown, params: unknown) => void;
export declare const removeCheckoutBadge: (containerId: unknown) => void;
export declare const setCustomer: (customer: unknown) => void;
export declare const setShippingAddress: (shippingAddress: unknown) => void;
export declare const setBillingAddress: (billingAddress: unknown) => void;
export {};
