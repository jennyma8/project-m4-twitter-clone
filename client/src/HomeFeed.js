import React, { useState, useContext, useEffect } from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import SmallTweet from "./SmallTweet";
import BigTweet from "./BigTweet";
import styled from "styled-components";
import { FiRepeat } from "react-icons/fi";
import TweetActions from "./TweetActions";
import { BsDot } from "react-icons/bs";
import CurrentUserContext from "./CurrentUserContext";

const HomeFeed = () => {
  // const { currentUser, setCurrentUser, status, setStatus } = React.useContext(
  //   CurrentUserContext
  // );
  const [feed, setFeed] = React.useState(null);
  const [feedStatus, feedSetStatus] = React.useState("loading");

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((response) => response.json())
      .then((data) => {
        setFeed(data);
        feedSetStatus("idle");
      });
  }, []);

  const tweetDisplay =
    feedStatus == "idle" ? (
      feed.tweetIds.map((id) => {
        const tweet = feed.tweetsById[id];
        return <BigTweet tweet={tweet} />;
      })
    ) : (
      <div>LOADING</div>
    );

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
      <Wrapper>
        {/* <NewTweet /> */}
        <div>{tweetDisplay}</div>
      </Wrapper>
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
  border-bottom: 10px solid lightgrey;
`;

const HomeInput = styled.input`
  border: 0;
`;

const MeowButton = styled.button``;

const Wrapper = styled.div`
  margin-left: 200px;
`;

export default HomeFeed;
