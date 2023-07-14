import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./style/GlobalStyles";
import { Calculator } from "./components/Calculator";
import { Footer } from "./components/footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Calculator />
    <Footer />
  </React.StrictMode>
);
