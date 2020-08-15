import React from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Bookmarks from "./Bookmarks";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Profile from "./Profile";
import TweetDetails from "./TweetDetails";
import { RiNotification2Line } from "react-icons/ri";
import { FiBookmark, FiUser, FiHome } from "react-icons/fi";
import Logo from "../src/assets/logo.svg";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "./constants";

const NavigationLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-left: 15px;

  &:hover {
    color: ${COLORS.primary};
  }
`;

function App() {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <Router>
        <div>
          <img src={Logo} />

          <ul>
            <li>
              <FiHome />

              <NavigationLink to="/">Home</NavigationLink>
            </li>
            <li>
              <FiUser />
              <NavigationLink to="/profile/abc">Profile</NavigationLink>
            </li>
            <li>
              <RiNotification2Line />
              <NavigationLink to="/notifications">Notifications</NavigationLink>
            </li>
            <li>
              <FiBookmark />
              <NavigationLink to="/bookmarks">Bookmarks</NavigationLink>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={HomeFeed} />
            <Route path="/notifications" component={Notifications} />
            <Route path="/bookmarks" component={Bookmarks} />
            <Route path="/tweet/:tweetId" component={TweetDetails} />
            <Route path="/profile/abc" component={Profile} />
          </Switch>
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
