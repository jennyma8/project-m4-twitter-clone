import React from "react";
import { useParams } from "react-router-dom";
import BigTweet from "./BigTweet";
import styled from "styled-components";

const TweetDetails = () => {
  const { tweetId } = useParams();
  console.log(tweetId);
  return (
    <Wrapper>
      <BigTweet tweetId={tweetId} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5px;
`;

export default TweetDetails;

//tweet/:tweetId
