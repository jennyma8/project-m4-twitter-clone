import React, { useState, useEffect } from "react";

export const CurrentUserContext = React.createContext(null);

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [status, setStatus] = React.useState("loading");

  // Fetch the user data from the API (/me/profile)
  // When the data is received, update currentUser.
  // Also, set `status` to `idle`
  useEffect(() => {
    fetch("/api/me/profile")
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data);
        setStatus("idle");
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
