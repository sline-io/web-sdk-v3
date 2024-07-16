import { customerSchema } from "schemas";
import { z } from "zod";

export type Customer = z.infer<typeof customerSchema>;
