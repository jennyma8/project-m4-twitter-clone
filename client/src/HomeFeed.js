import React from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import SmallTweet from "./SmallTweet";
import BigTweet from "./BigTweet";
import styled from "styled-components";
import { FiRepeat } from "react-icons/fi";
import TweetActions from "./TweetActions";
import { BsDot } from "react-icons/bs";

const HomeFeed = () => {
  //const { currentUser } = React.useContext(CurrentUserContext);
  const { feed, feedStatus } = React.useContext(HomeFeedContext);
  if (feed === null) {
    return "loading";
  }
  return (
    <>
      <Home>
        <div>Home</div>

        <HomeInput placeholder="What's happening?" maxlength="280" />
        <MeowButton>Meow</MeowButton>
      </Home>
      <BigTweet />
    </>
  );
};
const Home = styled.div`
  margin-top: -200px;
  margin-left: 200px;
  width: 700px;
  height: 200px;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
`;

const HomeInput = styled.input`
  border: 0;
`;

const MeowButton = styled.button``;
// Create a tweet component, pass `tweet` as a prop

export default HomeFeed;
