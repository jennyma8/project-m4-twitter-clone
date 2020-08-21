import React, { useState, useEffect } from "react";

export const HomeFeedContext = React.createContext(null);

const HomeFeedProvider = ({ children }) => {
  const [feed, setFeed] = React.useState(null);
  const [feedStatus, feedSetStatus] = React.useState("loading");

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((response) => response.json())
      .then((data) => {
        setFeed(data);
        feedSetStatus("idle");
      });
  }, []);
  console.log(feed);
  return (
    <HomeFeedContext.Provider value={{ feed, feedStatus }}>
      {children}
    </HomeFeedContext.Provider>
  );
};

export default HomeFeedProvider;

// '/api/:handle/feed'
