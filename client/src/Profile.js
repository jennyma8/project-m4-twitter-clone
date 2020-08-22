import React, { useState, useEffect } from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

import BigTweet from "./BigTweet";

const Profile = ({ children }) => {
  const { profileId } = useParams();
  const [user, setUser] = useState(null);
  const [userStatus, setUserStatus] = useState(null);
  const { feed } = React.useContext(HomeFeedContext);
  const { currentUser } = React.useContext(CurrentUserContext);

  console.log(feed);
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
      <Banner src={user.profile.bannerSrc} />
      <div>
        <Avatar src={user.profile.avatarSrc} />
      </div>
      <button>Following</button>
      <div>{user.profile.displayName}</div>
      <div>{user.profile.handle}</div>
      <div>Joined {user.profile.joined}</div>
      <div>{user.profile.location}</div>
      <div>{user.profile.numFollowing} Following</div>
      <div>{user.profile.numFollowers} Followers</div>
      <ActionBar>
        <div>Tweets</div>
        <div>Media</div>
        <div>Likes</div>
      </ActionBar>

      <BigTweet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 200px;
  margin-top: -200px;
`;

const Banner = styled.img`
  width: 700px;
  height: 200px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  margin-top: -50px;
  border: 1px solid white;
  width: 100px;
  height: 100px;
  margin-left: 20px;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 500px;
`;
export default Profile;
