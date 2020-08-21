import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { CurrentUserContext } from "./CurrentUserContext";
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

function App() {
  const { currentUser, status } = React.useContext(CurrentUserContext);

  return (
    <React.StrictMode>
      <GlobalStyles />
      <Router>
        <Wrapper>
          <Sidebar>
            <div>
              <img src={Logo} />

              <ul>
                <li>
                  <FiHome />

                  <NavigationLink to="/">Home</NavigationLink>
                </li>
                <li>
                  <FiUser />
                  <NavigationLink to="/profile/:profileId">
                    Profile
                  </NavigationLink>
                </li>
                <li>
                  <RiNotification2Line />
                  <NavigationLink to="/notifications">
                    Notifications
                  </NavigationLink>
                </li>
                <li>
                  <FiBookmark />
                  <NavigationLink to="/bookmarks">Bookmarks</NavigationLink>
                </li>
              </ul>
            </div>
          </Sidebar>

          <Switch>
            <Route exact path="/">
              <div>Home</div>
              <HomeFeed />
            </Route>
            <Route path="/notifications" component={Notifications} />
            <Route path="/bookmarks" component={Bookmarks} />
            <Route path="/tweet/:tweetId" component={TweetDetails} />
            <Route path="/profile/:profileId" component={Profile} />
          </Switch>
        </Wrapper>
      </Router>
    </React.StrictMode>
  );
}
const NavigationLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-left: 15px;

  &:hover {
    color: ${COLORS.primary};
  }
`;

const Sidebar = styled.div`
  margin: 2px;
`;

const Wrapper = styled.div`
  margin: 0px;
`;
export default App;
