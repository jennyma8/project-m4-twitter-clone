import React from "react";
import { HomeFeedContext } from "./HomeFeedContext";

const HomeFeed = () => {
  const { feed, feedStatus } = React.useContext(HomeFeedContext);
  if (feed === null) {
    return "loading";
  }
  return feed.tweetIds.map((tweetId) => {
    //console.log(feed.tweetsById[tweetId], tweetId, feed.tweetsById);
    const tweet = feed.tweetsById[tweetId];
    return <div>{tweet.status}</div>;
  });
};

// Create a tweet component, pass `tweet` as a prop

export default HomeFeed;
