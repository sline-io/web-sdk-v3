import { SessionCreateData } from "services/api";
export declare const useCheckoutUrl: () => {
    buildSessionUrl: ({ retailerId, lineItems, selectedDuration, }: Pick<SessionCreateData, "retailerId" | "lineItems" | "selectedDuration">) => Promise<string>;
    loading: boolean;
};
