import { LineItem, LineItemWithPlans } from "types";
import { apiClient } from "./client";

export const createPlans = async (lineItems: LineItem[]) =>
  (
    (await apiClient.post(
      "/retailers/9bdd8ff1-ce69-49fa-929a-fa358548cabd/plans",
      {
        line_items: lineItems,
      }
    )) as { line_items: LineItemWithPlans[] }
  ).line_items;
