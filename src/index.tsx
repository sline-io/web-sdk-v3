import ReactDOM from "react-dom/client";
import { CheckoutBadge } from "./components";
import React from "react";

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

export const addCheckoutBadge = (containerId: string, x: number, y: number) => {
  const root = getOrCreateRoot(containerId);

  root.render(
    <React.StrictMode>
      <CheckoutBadge x={x} y={y} />
    </React.StrictMode>
  );
};
