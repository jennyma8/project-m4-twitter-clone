import React from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import styled from "styled-components";
import { FiRepeat } from "react-icons/fi";
import TweetActions from "./TweetActions";
import { BsDot } from "react-icons/bs";

const SmallTweet = () => {
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
        <Retweet>
          {tweet.retweetFrom ? (
            <div>
              <FiRepeat />
              {tweet.retweetFrom.displayName} Remeowed
            </div>
          ) : null}
        </Retweet>
        <Tweet>
          <Avatar src={tweet.author.avatarSrc} />
          <TweetContent>
            <div>
              {tweet.author.displayName} @{tweet.author.handle}
              <BsDot />
              {tweet.timestamp}
            </div>
            <div>{tweet.status}</div>

            {tweet.media[0] ? <TweetImg src={tweet.media[0].url} /> : null}

            <TweetActions />
          </TweetContent>
        </Tweet>
      </Wrapper>
    );
  });
};

const Wrapper = styled.div`
  padding: 15px;
  margin-left: 0px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  width: 700px;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

const Retweet = styled.div`
  display: flex;
  color: grey;
  padding: 10px;
`;

const Tweet = styled.div`
  display: flex;
`;

const TweetContent = styled.div`
  margin-left: 20px;
`;

const TweetImg = styled.img`
  border-radius: 20px;
  height: 300px;
  width: 500px;
`;

export default SmallTweet;
