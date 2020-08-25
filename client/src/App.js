import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Bookmarks from "./Bookmarks";
import HomeFeed from "./HomeFeed";
import Notifications from "./Notifications";
import Profile from "./Profile";
import TweetDetails from "./TweetDetails";
import Sidebar from "./Sidebar";

import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { COLORS } from "./constants";

function App() {
  return (
    <React.StrictMode>
      <GlobalStyles />
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <HomeFeed />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks />
          </Route>
          <Route path="/tweet/:tweetId">
            <TweetDetails />
          </Route>
          <Route path="/profile/:profileId">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

const Wrapper = styled.div``;

export default App;
