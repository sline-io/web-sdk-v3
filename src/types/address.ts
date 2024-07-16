import { addressSchema } from "schemas";
import { z } from "zod";

export type Address = z.infer<typeof addressSchema>;
