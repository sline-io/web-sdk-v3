declare const _default: {
    test: boolean;
    apiBaseUrl: string;
    apiToken: string | undefined;
    customer?: {
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
    } | undefined;
    shippingAddress?: {
        gender?: "male" | "female" | undefined;
        first_name?: string | undefined;
        last_name?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        company_name?: string | undefined;
        street_address?: string | undefined;
        street_address_2?: string | undefined;
        zip_code?: string | undefined;
        city?: string | undefined;
        region?: string | undefined;
        country?: string | undefined;
    } | undefined;
    billingAddress?: {
        gender?: "male" | "female" | undefined;
        first_name?: string | undefined;
        last_name?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        company_name?: string | undefined;
        street_address?: string | undefined;
        street_address_2?: string | undefined;
        zip_code?: string | undefined;
        city?: string | undefined;
        region?: string | undefined;
        country?: string | undefined;
    } | undefined;
};
export default _default;
