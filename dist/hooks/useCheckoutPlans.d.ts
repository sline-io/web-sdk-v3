import { LineItem } from "types";
type CheckoutPlan = {
    duration: number;
    firstInstalmentWithTax: number;
    otherInstalmentWithTax: number;
};
export declare const useCheckoutPlans: (lineItems: LineItem[]) => CheckoutPlan[] | undefined;
export {};
