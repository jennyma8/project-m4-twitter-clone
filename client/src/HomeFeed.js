import React, { useState, useContext, useEffect } from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import BigTweet from "./BigTweet";
import styled from "styled-components";
import CurrentUserContext from "./CurrentUserContext";

const HomeFeed = () => {
  // const { currentUser, setCurrentUser, status, setStatus } = React.useContext(
  //   CurrentUserContext
  // );
  const [feed, setFeed] = React.useState(null);
  const [feedStatus, feedSetStatus] = React.useState("loading");

  const [currentTweet, setCurrentTweet] = React.useState("");
  const [error, setError] = React.useState(false);

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((response) => response.json())
      .then((data) => {
        setFeed(data);
        feedSetStatus("idle");
      });
  }, []);

  const errorMessage = "you have reached character limit of 280 characters";
  const MAXCHAR = 280;
  const maxCharacters = (characters) => {
    if (characters > MAXCHAR) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleOnChange = (ev) => {
    maxCharacters(ev.target.value.length);
    console.log(ev.target.value);
    setCurrentTweet(ev.target.value);
  };

  const handleSubmitTweet = () => {
    fetch(`/api/tweet`, {
      method: "POST",
      body: JSON.stringify({ status: currentTweet }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      })

      .catch(console.error);
  };

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
      <div>
        {error && <div>{errorMessage}</div>}
        <Wrapper>
          <Home>
            <form onSubmit={maxCharacters}>
              <div>Home</div>
              <HomeInput
                type="text"
                placeholder="What's happening?"
                maxlength="280"
                name="content"
                value={currentTweet}
                onChange={handleOnChange}
              ></HomeInput>
              <div>Remaining Characters: {MAXCHAR - currentTweet.length}</div>
              <MeowButton
                onClick={handleSubmitTweet}
                type="submit"
                disabled={currentTweet.length > 0 ? false : true}
              >
                MEOW
              </MeowButton>
            </form>
          </Home>

          <div>{currentTweet}</div>
          <div>{tweetDisplay}</div>
        </Wrapper>
      </div>
    </>
  );
};
const Home = styled.div`
  margin-top: -200px;

  width: 700px;
  height: 200px;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-bottom: 10px solid lightgrey;
`;

const HomeInput = styled.input`
  border: 0;
  width: 600px;
  height: 100px;
`;

const MeowButton = styled.button`
  text-decoration: none;
  background: blue;
  border: none;
  color: white;
  border-radius: 20px;
  width: 75px;
  height: 30px;
  font-size: 15px;
  margin-left: 600px;
`;

const Wrapper = styled.div`
  margin-left: 200px;
`;

export default HomeFeed;
