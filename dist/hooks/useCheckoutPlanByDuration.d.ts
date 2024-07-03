import { LineItem } from "types";
type CheckoutPlan = {
    firstInstalmentWithTax: number;
    otherInstalmentWithTax: number;
};
export declare const useCheckoutPlanByDuration: (lineItems: LineItem[]) => Record<number, CheckoutPlan> | undefined;
export {};
