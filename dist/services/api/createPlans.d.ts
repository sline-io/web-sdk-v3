import { SessionLineItem, SessionLineItemWithPlans } from "types";
export declare const createPlans: (lineItems: SessionLineItem[]) => Promise<SessionLineItemWithPlans[]>;
