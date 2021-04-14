import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import App1 from "./App1";
import App2 from "./App2";
import Button from "./Button";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <div className="frame">
    <div className="Main">
      <StrictMode>
        <App />
        <App1 />
        <App2 />
        <Button />
      </StrictMode>
    </div>
  </div>,
  rootElement
);
