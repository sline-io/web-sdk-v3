import { Address, Customer } from "types";

export default {
  test: false,
  apiBaseUrl: "https://api.prod.sline.io/v3",
  apiToken: undefined,
  customer: undefined,
  shippingAddress: undefined,
  billingAddress: undefined,
} as {
  test: boolean;
  apiBaseUrl: string;
  apiToken: string | undefined;
  customer?: Customer;
  shippingAddress?: Address;
  billingAddress?: Address;
};
