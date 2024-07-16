import ReactDOM from "react-dom/client";
import { CheckoutBadge, CheckoutBadgeProps } from "./components";
import React from "react";
import { initializeApiClient } from "services/api";
import config from "config";
import { SessionAddress, SessionCustomer } from "types";

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

const getOrCreateRoot = (containerId: string) => {
  if (containerId in rootByContainerId) {
    return rootByContainerId[containerId];
  }

  const container = document.getElementById(containerId);

  if (!container) throw Error(`Container '#${containerId}' not found in DOM.`);

  const root = ReactDOM.createRoot(container);

  rootByContainerId[containerId] = root;

  return root;
};

export const addCheckoutBadge = (
  containerId: string,
  props: CheckoutBadgeProps
) => {
  if (!initialized)
    throw Error(
      "You must initialize the SDK before adding a checkout badge in your page."
    );

  const root = getOrCreateRoot(containerId);

  root.render(
    <React.StrictMode>
      <CheckoutBadge {...props} />
    </React.StrictMode>
  );
};

export const removeCheckoutBadge = (containerId: string) => {
  const root = getOrCreateRoot(containerId);

  root.unmount();
};

export const setCustomer = (customer: SessionCustomer | undefined) =>
  (config.customer = customer);

export const setShippingAddress = (
  shippingAddress: SessionAddress | undefined
) => (config.shippingAddress = shippingAddress);

export const setBillingAddress = (billingAddress: SessionAddress | undefined) =>
  (config.billingAddress = billingAddress);
