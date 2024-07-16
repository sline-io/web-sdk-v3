import { LineItem, Session, Customer, Address } from "types";
export interface SessionCreateData {
    retailerId: string;
    lineItems: LineItem[];
    selectedDuration: number | undefined;
    customer?: Customer;
    shippingAddress?: Address;
    billingAddress?: Address;
}
export declare const createSession: ({ retailerId, lineItems, selectedDuration, customer, shippingAddress, billingAddress, }: SessionCreateData) => Promise<Session>;
