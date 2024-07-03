import { SessionLineItem, SessionLineItemWithPlans } from "types";
import { apiClient } from "./client";

export const createPlans = async (lineItems: SessionLineItem[]) =>
  (
    (await apiClient.post(
      "/retailers/9bdd8ff1-ce69-49fa-929a-fa358548cabd/plans",
      {
        line_items: lineItems,
      }
    )) as { line_items: SessionLineItemWithPlans[] }
  ).line_items;
