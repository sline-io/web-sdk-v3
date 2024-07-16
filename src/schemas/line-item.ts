import { z } from "zod";

export const lineItemSchema = z.object({
  item_type: z.enum(["physical", "shipping", "coupon", "service"]),
  unit_price: z.number(),
  quantity: z.number(),
  rent: z.boolean(),
  msrp: z.number().optional(),
  product_value: z.number().optional(),
  coverage_configuration_code: z.string().optional(),
  pricing_configuration_code: z.string().optional(),
  name: z.string().optional(),
  reference: z.string().optional(),
  image: z.string().optional(),
  product_url: z.string().optional(),
  brand: z.string().optional(),
  category_path: z.string().optional(),
  item_variant: z.string().optional(),
  description: z.string().optional(),
  global_trade_item_number: z.string().optional(),
  manufacturer_part_number: z.string().optional(),
  merchant_data: z.string().optional(),
});
