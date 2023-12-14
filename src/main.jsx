import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { WebsocketProvider } from "./context/WebsocketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WebsocketProvider>
      <RouterProvider router={router} />
    </WebsocketProvider>
  </React.StrictMode>
);
