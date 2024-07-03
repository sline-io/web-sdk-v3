import { SessionLineItem } from "types";
type CheckoutPlan = {
    duration: number;
    firstInstalmentWithTax: number;
    otherInstalmentWithTax: number;
};
export declare const useCheckoutPlans: (lineItems: SessionLineItem[]) => CheckoutPlan[] | undefined;
export {};
