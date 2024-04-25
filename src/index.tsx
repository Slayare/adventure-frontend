import React from "react";
import ReactDOM from "react-dom/client";

import Routes from "./Routes";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
