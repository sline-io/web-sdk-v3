import { LineItem, Session, Customer, Address } from "types";
import { apiClient } from "./client";

export interface SessionCreateData {
  retailerId: string;
  lineItems: LineItem[];
  selectedDuration: number | undefined;
  customer?: Customer;
  shippingAddress?: Address;
  billingAddress?: Address;
}

export const createSession = async ({
  retailerId,
  lineItems,
  selectedDuration,
  customer,
  shippingAddress,
  billingAddress,
}: SessionCreateData) =>
  (
    (await apiClient.post(`/sessions?retailer_id=${retailerId}`, {
      line_items_attributes: lineItems,
      selected_duration: selectedDuration,
      session_customer_attributes: customer,
      shipping_address_attributes: shippingAddress,
      billing_address_attributes: billingAddress,
    })) as { session: Session }
  ).session;
