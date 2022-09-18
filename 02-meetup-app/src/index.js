import React from "react";
import ReactDOM from "react-dom/client";
// Routing package which
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// Wrap BrowserRouter around App to ensure, routing in App will work
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
