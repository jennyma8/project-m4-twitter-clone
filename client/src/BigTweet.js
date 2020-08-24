import React, { useState, Component } from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import styled from "styled-components";
import { FiRepeat } from "react-icons/fi";
import TweetActions from "./TweetActions";
import { BsDot } from "react-icons/bs";
import { useHistory, Link, useParams } from "react-router-dom";
import { format } from "date-fns";

const BigTweet = ({ tweet }) => {
  let history = useHistory();
  function handleClick(ev) {
    ev.preventDefault();
    history.push(`/profile/${tweet.author.handle}`);
  }

  return tweet ? (
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

          <Author onClick={handleClick}>
            <strong>{tweet.author.displayName} </strong>@{tweet.author.handle}
          </Author>
          <BsDot />
          {format(new Date(tweet.timestamp), "MM/dd/yyyy")}
        </Tweet>
        <TweetContent>
          {" "}
          <div>{tweet.status}</div>
          <div>
            {tweet.media[0] ? <MediaPic src={tweet.media[0].url} /> : null}{" "}
          </div>
        </TweetContent>

        <TweetActions id={tweet.id} liked={tweet.isLiked}>
          Tweet bar actions icons
        </TweetActions>
      </Wrapper>
    </MyLink>
  ) : (
    <div>loading</div>
  );
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
  margin-left: 50px;
`;

const MyLink = styled(Link)``;

const Author = styled.div``;

const MediaPic = styled.img`
  border-radius: 20px;
  height: 300px;
  width: 500px;
  margin-top: 5px;
`;
export default BigTweet;

//to be used in Tweet Details Page/single tweet
