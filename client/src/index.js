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
          <Route exact path="/" component={App} />
          <Route path="/Bookmarks" component={Bookmarks} />
          <Route path="/HomeFeed" component={HomeFeed} />
          <Route path="/Notifications" component={Notifications} />
          <Route path="/Profile" component={Profile} />
          <Route path="/TweetDetails" component={TweetDetails} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
