import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BigTweet from "./BigTweet";
import styled from "styled-components";

const TweetDetails = () => {
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState(null);
  const [tweetStatus, setTweetStatus] = useState(null);

  console.log(tweetId);

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then((response) => response.json())
      .then((data) => {
        setTweet(data);
        setTweetStatus("idle");
      });
  }, [tweetId]);

  if (tweetStatus === null) {
    return "loading";
  }

  return (
    <Wrapper>
      <BigTweet tweet={tweet} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5px;
`;

export default TweetDetails;

//tweet/:tweetId
