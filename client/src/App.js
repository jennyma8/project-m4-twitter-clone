import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { CurrentUserContext } from "./CurrentUserContext";
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
  const { currentUser, status } = React.useContext(CurrentUserContext);

  return (
    <React.StrictMode>
      <GlobalStyles />
      <Router>
        <Wrapper>
          <Sidebar />

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

const Wrapper = styled.div`
  margin: 0px;
`;
export default App;
