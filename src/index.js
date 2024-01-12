import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {NextUIProvider} from "@nextui-org/system";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
