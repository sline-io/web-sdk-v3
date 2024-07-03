import { SessionAddress, SessionCustomer } from "types";

export default {
  test: false,
  customer: undefined,
  shippingAddress: undefined,
  billingAddress: undefined,
} as {
  test: boolean;
  customer?: SessionCustomer;
  shippingAddress?: SessionAddress;
  billingAddress?: SessionAddress;
};
