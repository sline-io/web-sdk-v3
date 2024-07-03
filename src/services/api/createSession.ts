import { LineItem, Session } from "types";
import { apiClient } from "./client";

export interface SessionCreateData {
  lineItems: LineItem[];
  selectedDuration: number | undefined;
}

export const createSession = async ({
  lineItems,
  selectedDuration,
}: SessionCreateData) =>
  (
    (await apiClient.post(
      "/sessions?retailer_id=9bdd8ff1-ce69-49fa-929a-fa358548cabd",
      {
        line_items_attributes: lineItems,
        selected_duration: selectedDuration,
      }
    )) as { session: Session }
  ).session;
