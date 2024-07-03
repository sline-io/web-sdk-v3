import {
  SessionLineItem,
  Session,
  SessionCustomer,
  SessionAddress,
} from "types";
import { apiClient } from "./client";

export interface SessionCreateData {
  lineItems: SessionLineItem[];
  selectedDuration: number | undefined;
  customer?: SessionCustomer;
  shippingAddress?: SessionAddress;
  billingAddress?: SessionAddress;
}

export const createSession = async ({
  lineItems,
  selectedDuration,
  customer,
  shippingAddress,
  billingAddress,
}: SessionCreateData) =>
  (
    (await apiClient.post(
      "/sessions?retailer_id=9bdd8ff1-ce69-49fa-929a-fa358548cabd",
      {
        line_items_attributes: lineItems,
        selected_duration: selectedDuration,
        session_customer_attributes: customer,
        shipping_address_attributes: shippingAddress,
        billing_address_attributes: billingAddress,
      }
    )) as { session: Session }
  ).session;
