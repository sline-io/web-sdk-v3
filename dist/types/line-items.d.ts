export type LineItem = {
    name?: string;
    reference?: string;
    item_type: "physical" | "shipping" | "coupon" | "service";
    unit_price: number;
    quantity: number;
    rent: boolean;
    msrp?: number;
    product_value?: number;
    coverage_configuration_code?: string;
    pricing_configuration_code?: string;
    image?: string;
    product_url?: string;
    brand?: string;
    category_path?: string;
    global_trade_item_number?: string;
    manufacturer_part_number?: string;
    item_variant?: string;
    description?: string;
    merchant_data?: string;
};
export type LineItemPlan = {
    duration: number;
    first_instalment_with_tax: number;
    other_instalment_with_tax: number;
};
export type LineItemWithPlans = LineItem & {
    plans: LineItemPlan[];
};
