export type Session = {
  id: string;
};

export type SessionLineItem = {
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

export type SessionLineItemPlan = {
  duration: number;
  first_instalment_with_tax: number;
  other_instalment_with_tax: number;
};

export type SessionLineItemWithPlans = SessionLineItem & {
  plans: SessionLineItemPlan[];
};

export type SessionCustomer = {
  gender?: "male" | "female";
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  date_of_birth?: string;
  customer_type?: "company" | "person";
  company_name?: string;
  company_registration_id?: string;
  company_vat_id?: string;
};

export type SessionAddress = {
  street_address?: string;
  street_address_2?: string;
  zip_code?: string;
  city?: string;
  region?: string;
  country?: string;
  gender?: "male" | "female";
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  company_name?: string;
};
