import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App1 from "./App1";
import App2 from "./App2";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App1 />
    <App2 />
  </StrictMode>,
  rootElement
);
