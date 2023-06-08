import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./style/GlobalStyles";
import { Calculator } from "./components/Calculator";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Calculator />
  </React.StrictMode>
);
