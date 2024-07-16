import { z } from "zod";

export const customerSchema = z.object({
  gender: z.enum(["male", "female"]).optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  date_of_birth: z.string().optional(),
  customer_type: z.enum(["person", "company"]).optional(),
  company_name: z.string().optional(),
  company_registration_id: z.string().optional(),
  company_vat_id: z.string().optional(),
});
