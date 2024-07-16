import { lineItemSchema } from "schemas";
import { z } from "zod";

export type LineItem = z.infer<typeof lineItemSchema>;

export type LineItemPlan = {
  duration: number;
  first_instalment_with_tax: number;
  other_instalment_with_tax: number;
};

export type LineItemWithPlans = LineItem & {
  plans: LineItemPlan[];
};
