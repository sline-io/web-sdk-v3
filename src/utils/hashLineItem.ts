import hash from "object-hash";
import { SessionLineItem } from "types";

export const hashLineItem = ({
  unit_price,
  quantity,
  msrp,
  product_value,
  coverage_configuration_code,
  pricing_configuration_code,
}: SessionLineItem) =>
  hash({
    unit_price,
    quantity,
    msrp,
    product_value,
    coverage_configuration_code,
    pricing_configuration_code,
  });
