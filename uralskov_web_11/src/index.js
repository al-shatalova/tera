import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Article from "./Article";
import Head from "./Head";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Head />
    <Article />
  </StrictMode>,
  rootElement
);
