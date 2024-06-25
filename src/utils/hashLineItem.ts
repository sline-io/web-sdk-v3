import hash from "object-hash";
import { LineItem, LineItemWithPlans } from "types";

export const hashLineItem = ({
  unit_price,
  quantity,
}: LineItem | LineItemWithPlans) => hash({ unit_price, quantity });
