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
          <Home>Home</Home>
          <HomeFeed />
        </Wrapper>
      </Router>
    </React.StrictMode>
  );
}

const Wrapper = styled.div``;

const Home = styled.div`
  margin-top: -200px;
  margin-left: 200px;
`;
export default App;
