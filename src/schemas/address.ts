import { z } from "zod";

export const addressSchema = z.object({
  street_address: z.string().optional(),
  street_address_2: z.string().optional(),
  zip_code: z.string().optional(),
  city: z.string().optional(),
  region: z.string().optional(),
  country: z.string().optional(),
  gender: z.enum(["male", "female"]).optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  company_name: z.string().optional(),
});
