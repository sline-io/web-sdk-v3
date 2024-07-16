import config from "config";
import { useCallback, useState } from "react";
import { createSession, SessionCreateData } from "services/api";

export const useCheckoutUrl = () => {
  const [loading, setLoading] = useState(false);

  const buildSessionUrl = useCallback(
    async ({
      retailerId,
      lineItems,
      selectedDuration,
    }: Pick<
      SessionCreateData,
      "retailerId" | "lineItems" | "selectedDuration"
    >) => {
      setLoading(true);

      try {
        const { customer, shippingAddress, billingAddress } = config;

        const session = await createSession({
          retailerId,
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
        return `${baseUrl}/${session.id}?retailerApiKey=${config.apiToken}`;
      } catch (error) {
        setLoading(false);
        throw error;
      }
    },
    []
  );

  return { buildSessionUrl, loading };
};
