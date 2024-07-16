import ReactDOM from "react-dom/client";
import { CheckoutBadge } from "./components";
import React from "react";
import { initializeApiClient } from "services/api";
import config from "config";
import { z } from "zod";
import { addressSchema, customerSchema, lineItemSchema } from "schemas";

type InitializeOptions = {
  clientId: string;
  clientSecret: string;
  test?: boolean;
};

let initialized = false;
export const initialize = ({
  clientId,
  clientSecret,
  test = false,
}: InitializeOptions) => {
  initializeApiClient({ clientId, clientSecret, test });
  config.test = test;
  initialized = true;
};

const rootByContainerId: Record<string, ReactDOM.Root> = {};

const getOrCreateRoot = (containerId: unknown) => {
  const result = z.string().safeParse(containerId);

  if (!result.success)
    throw Error(
      `Container id is missing or invalid.\n${result.error.message}.`
    );

  if (result.data in rootByContainerId) {
    return rootByContainerId[result.data];
  }

  const container = document.getElementById(result.data);

  if (!container) throw Error(`Container '#${containerId}' not found in DOM.`);

  const root = ReactDOM.createRoot(container);

  rootByContainerId[result.data] = root;

  return root;
};

export const addCheckoutBadge = (containerId: unknown, params: unknown) => {
  if (!initialized)
    throw Error(
      "You must initialize the SDK before adding a checkout badge in your page."
    );

  const root = getOrCreateRoot(containerId);

  const result = z
    .object({ retailerId: z.string(), lineItems: z.array(lineItemSchema) })
    .safeParse(params);

  if (!result.success)
    throw Error(`Params are missing or invalid.\n${result.error.message}`);

  root.render(
    <React.StrictMode>
      <CheckoutBadge {...result.data} />
    </React.StrictMode>
  );
};

export const removeCheckoutBadge = (containerId: unknown) => {
  const root = getOrCreateRoot(containerId);

  root.unmount();
};

export const setCustomer = (customer: unknown) => {
  const result = customerSchema.optional().safeParse(customer);

  if (!result.success)
    throw Error(`Customer is invalid.\n${result.error.message}`);

  config.customer = result.data;
};

export const setShippingAddress = (shippingAddress: unknown) => {
  const result = addressSchema.optional().safeParse(shippingAddress);

  if (!result.success)
    throw Error(`Shipping address is invalid.\n${result.error.message}`);

  config.shippingAddress = result.data;
};

export const setBillingAddress = (billingAddress: unknown) => {
  const result = addressSchema.optional().safeParse(billingAddress);

  if (!result.success)
    throw Error(`Billing address is invalid.\n${result.error.message}`);

  config.billingAddress = result.data;
};
