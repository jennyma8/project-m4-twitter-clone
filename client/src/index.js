import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./App";
import Bookmarks from "./Bookmarks";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Profile from "./Profile";
import TweetDetails from "./TweetDetails";
import { FiHome } from "react-icons/fi";
import { RiNotification2Line } from "react-icons/ri";
import { FiBookmark } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import Logo from "../src/assets/logo.svg";
import GlobalStyles from "./GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <div>
        <ul>
          <li>
            <img src={Logo} />
          </li>

          <li>
            <FiHome />
            <Link to="/">Home</Link>
          </li>
          <li>
            <FiUser />
            <Link to="/:profileId">Profile</Link>
          </li>
          <li>
            <RiNotification2Line />
            <Link to="/notifications">Notifications</Link>
          </li>
          <li>
            <FiBookmark />
            <Link to="/bookmarks">Bookmarks</Link>
          </li>
        </ul>
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
