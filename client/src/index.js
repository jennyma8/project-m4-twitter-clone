import React from "react";
import ReactDOM from "react-dom";
import CurrentUserProvider from "./CurrentUserContext";
import HomeFeedProvider from "./HomeFeedContext";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <CurrentUserProvider>
    <HomeFeedProvider>
      <App />
    </HomeFeedProvider>
  </CurrentUserProvider>,
  rootElement
);
