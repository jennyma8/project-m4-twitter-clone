import React, { useState, useEffect } from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

const Profile = ({ children }) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  if (currentUser === null) {
    return "loading";
  }
  return (
    <Wrapper>
      <img src={currentUser.profile.bannerSrc}></img>
      <img src={currentUser.profile.avatarSrc}></img>
      <button>Following</button>
      <div>{currentUser.profile.displayName}</div>
      <div>{currentUser.profile.handle}</div>
      <div>Joined {currentUser.profile.joined}</div>
      <div>{currentUser.profile.location}</div>
      <div>{currentUser.profile.numFollowing} Following</div>
      <div>{currentUser.profile.numFollowers} Followers</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2px;
`;
export default Profile;
