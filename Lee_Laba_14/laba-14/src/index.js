import { StrictMode } from "react";
 import ReactDOM from "react-dom";

 import App from "./App";
 import Login from "./App1";
 import Pass from "./App2";
 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <StrictMode>
     <Login />
     <h1>Логин</h1>
     <Pass />
     <h1>Пароль </h1>
     <App />
   </StrictMode>,
   rootElement
 );