import React from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import SmallTweet from "./SmallTweet";
import styled from "styled-components";

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
        <Avatar src={tweet.author.avatarSrc} />
        <div>{tweet.author.displayName}</div>
        <div>@{tweet.author.handle}</div>
        <div>{tweet.timestamp}</div>
        <div>{tweet.status}</div>
        {tweet.media[0] ? <img src={tweet.media[0].url}></img> : null}
        <div>comment icon</div>
        <div>retweet icon</div>
        <div>like icon</div>
        <div>download icon</div>
      </Wrapper>
    );
  });
};

const Wrapper = styled.div`
  padding: 5px;
  margin-left: 150px;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

// Create a tweet component, pass `tweet` as a prop

export default HomeFeed;
