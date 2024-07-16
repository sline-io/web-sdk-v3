import { z } from "zod";
export declare const customerSchema: z.ZodObject<{
    gender: z.ZodOptional<z.ZodEnum<["male", "female"]>>;
    first_name: z.ZodOptional<z.ZodString>;
    last_name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    date_of_birth: z.ZodOptional<z.ZodString>;
    customer_type: z.ZodOptional<z.ZodEnum<["person", "company"]>>;
    company_name: z.ZodOptional<z.ZodString>;
    company_registration_id: z.ZodOptional<z.ZodString>;
    company_vat_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    gender?: "male" | "female" | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    date_of_birth?: string | undefined;
    customer_type?: "person" | "company" | undefined;
    company_name?: string | undefined;
    company_registration_id?: string | undefined;
    company_vat_id?: string | undefined;
}, {
    gender?: "male" | "female" | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    date_of_birth?: string | undefined;
    customer_type?: "person" | "company" | undefined;
    company_name?: string | undefined;
    company_registration_id?: string | undefined;
    company_vat_id?: string | undefined;
}>;
