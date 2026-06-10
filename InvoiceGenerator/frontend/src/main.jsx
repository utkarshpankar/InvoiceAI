import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";
import { CLERK_PUBLISHABLE_KEY, validateClientEnv } from "./config/env";

validateClientEnv();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);
