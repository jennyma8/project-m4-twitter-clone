import React, { useState, Component } from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import styled from "styled-components";
import { FiRepeat } from "react-icons/fi";
import TweetActions from "./TweetActions";
import { BsDot } from "react-icons/bs";
import { useHistory, Link, useParams } from "react-router-dom";
import { format } from "date-fns"; need to install date-fns

const BigTweet = ({ tweetData }) => {
  const { feed, feedStatus } = React.useContext(HomeFeedContext);
  function handleClick(ev) {
    ev.preventDefault();
  }

  if (feed === null) {
    return "loading";
  }
  return feed.tweetIds.map((tweetId) => {
    //console.log(feed.tweetsById[tweetId], tweetId, feed.tweetsById);
    const tweet = feed.tweetsById[tweetId];
    console.log(tweet);
    return (
      <MyLink to={`/tweet/${tweet.id}`}>
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
            <Avatar src={tweet.author.avatarSrc} onClick={handleClick} />
            <TweetContent onClick={handleClick}>
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
      </MyLink>
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

const MyLink = styled(Link)``;
export default BigTweet;

//to be used in Tweet Details Page/single tweet
