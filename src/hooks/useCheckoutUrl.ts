import config from "config";
import { useCallback, useState } from "react";
import { createSession, SessionCreateData } from "services/api";

export const useCheckoutUrl = () => {
  const [loading, setLoading] = useState(false);

  const buildSessionUrl = useCallback(
    async ({
      lineItems,
      selectedDuration,
    }: Pick<SessionCreateData, "lineItems" | "selectedDuration">) => {
      setLoading(true);

      try {
        const { customer, shippingAddress, billingAddress } = config;

        const session = await createSession({
          lineItems,
          selectedDuration,
          customer,
          shippingAddress,
          billingAddress,
        });

        const baseUrl = config.test
          ? "https://checkout.stg.sline.io"
          : "https://subscribe.sline.io";

        setLoading(false);
        return `${baseUrl}/${session.id}`;
      } catch (error) {
        setLoading(false);
        throw error;
      }
    },
    []
  );

  return { buildSessionUrl, loading };
};
