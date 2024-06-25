import ReactDOM from "react-dom/client";
import { CheckoutBadge, CheckoutBadgeProps } from "./components";
import React from "react";
import { initializeApiClient } from "services/api";

let initialized = false;

type InitializeOptions = {
  clientId: string;
  clientSecret: string;
  test?: boolean;
};

export const initialize = ({
  clientId,
  clientSecret,
  test = false,
}: InitializeOptions) => {
  initializeApiClient({ clientId, clientSecret, test });
  initialized = true;
};

const rootByContainerId: Record<string, ReactDOM.Root> = {};

const getOrCreateRoot = (containerId: string) => {
  if (containerId in rootByContainerId) {
    return rootByContainerId[containerId];
  }

  const container = document.getElementById(containerId);

  if (!container) throw Error(`Container #{containerId} not found in DOM.`);

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
