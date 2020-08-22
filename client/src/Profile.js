import React, { useState, useEffect } from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

const Profile = ({ children }) => {
  const { profileId } = useParams();
  const [user, setUser] = useState(null);
  const [userStatus, setUserStatus] = useState(null);

  const { currentUser } = React.useContext(CurrentUserContext);

  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then((response) => response.json())
      .then((data) => {
        console.log(user);
        setUser(data);
        setUserStatus("idle");
      });
    // fetch the user from the profile id
    // get the data and set it in user state
  }, []);
  console.log(user);
  if (user === null) {
    return "loading";
  }

  return (
    <Wrapper>
      <img src={user.profile.bannerSrc}></img>
      <img src={user.profile.avatarSrc}></img>
      <button>Following</button>
      <div>{user.profile.displayName}</div>
      <div>{user.profile.handle}</div>
      <div>Joined {user.profile.joined}</div>
      <div>{user.profile.location}</div>
      <div>{user.profile.numFollowing} Following</div>
      <div>{user.profile.numFollowers} Followers</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2px;
`;
export default Profile;
