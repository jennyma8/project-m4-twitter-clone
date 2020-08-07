import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Bookmarks from "./Bookmarks";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Profile from "./Profile";
import TweetDetails from "./TweetDetails";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Bookmarks />
    <HomeFeed />
    <Notifications />
    <Profile />
    <TweetDetails />
  </React.StrictMode>,
  document.getElementById("root")
);
