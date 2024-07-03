import { SessionCreateData } from "services/api";
export declare const useCheckoutUrl: () => {
    buildSessionUrl: ({ lineItems, selectedDuration, }: Pick<SessionCreateData, "lineItems" | "selectedDuration">) => Promise<string>;
    loading: boolean;
};
