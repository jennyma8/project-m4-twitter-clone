import React from "react";
import ReactDOM from "react-dom";
import { CurrentUserProvider } from "./CurrentUserContext";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <CurrentUserProvider>
    <App />
  </CurrentUserProvider>,
  rootElement
);
