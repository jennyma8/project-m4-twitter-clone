import React from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import SmallTweet from "./SmallTweet";
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
      {feed.tweetIds.map((tweetId) => {
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
      })}
    </>
  );
};

const Wrapper = styled.div`
  padding: 15px;
  margin-left: 200px;
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
