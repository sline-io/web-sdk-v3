import hash from "object-hash";
import { LineItem } from "types";

export const hashLineItem = ({
  unit_price,
  quantity,
  msrp,
  product_value,
  coverage_configuration_code,
  pricing_configuration_code,
}: LineItem) =>
  hash({
    // ? only fields that have an impact on plans
    unit_price,
    quantity,
    msrp,
    product_value,
    coverage_configuration_code,
    pricing_configuration_code,
  });
