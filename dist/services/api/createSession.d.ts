import { SessionLineItem, Session, SessionCustomer, SessionAddress } from "types";
export interface SessionCreateData {
    retailerId: string;
    lineItems: SessionLineItem[];
    selectedDuration: number | undefined;
    customer?: SessionCustomer;
    shippingAddress?: SessionAddress;
    billingAddress?: SessionAddress;
}
export declare const createSession: ({ retailerId, lineItems, selectedDuration, customer, shippingAddress, billingAddress, }: SessionCreateData) => Promise<Session>;
