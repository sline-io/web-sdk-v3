import ReactDOM from "react-dom/client";
import { CheckoutBadge } from "./components";
import React from "react";

document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <CheckoutBadge />
    </React.StrictMode>
  );
});
