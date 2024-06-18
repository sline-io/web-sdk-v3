import ReactDOM from "react-dom/client";
import { CheckoutBadge } from "./components";
import React from "react";

export const addCheckoutBadge = (containerId: string) => {
  const container = document.getElementById(containerId);

  if (!container) throw Error(`Container #{containerId} not found in DOM.`);

  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <CheckoutBadge />
    </React.StrictMode>
  );
};
