import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./App";
import Bookmarks from "./Bookmarks";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Profile from "./Profile";
import TweetDetails from "./TweetDetails";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeFeed} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="/tweet/:tweetId" component={TweetDetails} />
          <Route path="/:profileId" component={Profile} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
