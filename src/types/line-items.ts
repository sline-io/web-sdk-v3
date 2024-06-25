export type LineItem = {
  name?: string;
  item_type: "physical" | "shipping" | "coupon" | "service";
  unit_price: number;
  quantity: number;
  rent: boolean;
};

export type LineItemPlan = {
  duration: number;
  first_instalment_with_tax: number;
  other_instalment_with_tax: number;
};

export type LineItemWithPlans = {
  name?: string;
  item_type: "physical" | "shipping" | "coupon" | "service";
  unit_price: number;
  quantity: number;
  rent: boolean;
  plans: LineItemPlan[];
};
