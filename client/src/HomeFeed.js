import React from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import SmallTweet from "./SmallTweet";
import styled from "styled-components";
import { FiRepeat } from "react-icons/fi";
import TweetActions from "./TweetActions";

const HomeFeed = () => {
  // const { currentUser } = React.useContext(CurrentUserContext);
  const { feed, feedStatus } = React.useContext(HomeFeedContext);
  if (feed === null) {
    return "loading";
  }

  return feed.tweetIds.map((tweetId) => {
    //console.log(feed.tweetsById[tweetId], tweetId, feed.tweetsById);
    const tweet = feed.tweetsById[tweetId];
    console.log(tweet);
    return (
      <Wrapper>
        <FiRepeat />
        {tweet.retweetFrom ? <div>{tweet.retweetFrom.displayName}</div> : null}
        <Avatar src={tweet.author.avatarSrc} />
        <div>{tweet.author.displayName}</div>
        <div>@{tweet.author.handle}</div>
        <div>{tweet.timestamp}</div>
        <div>{tweet.status}</div>
        {tweet.media[0] ? <img src={tweet.media[0].url}></img> : null}
        <TweetActions />
      </Wrapper>
    );
  });
};

const Wrapper = styled.div`
  padding: 15px;
  margin-left: 200px;
  display: flex;
  flex-direction: column;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

// Create a tweet component, pass `tweet` as a prop

export default HomeFeed;
