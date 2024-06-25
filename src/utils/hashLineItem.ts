import hash from "object-hash";
import { LineItem, LineItemWithPlans } from "types";

export const hashLineItem = ({
  unit_price,
  quantity,
  msrp,
  product_value,
  coverage_configuration_code,
  pricing_configuration_code,
}: LineItem) =>
  hash({
    unit_price,
    quantity,
    msrp,
    product_value,
    coverage_configuration_code,
    pricing_configuration_code,
  });
