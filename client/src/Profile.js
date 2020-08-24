import React, { useState, useEffect } from "react";
import { HomeFeedContext } from "./HomeFeedContext";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

import BigTweet from "./BigTweet";

const Profile = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState(null);
  const [tweets, setTweets] = useState([]);

  //fetch profile
  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
      });
  }, [profileId]);

  useEffect(() => {
    fetch(`/api/${profileId}/feed`)
      .then((response) => response.json())
      .then((data) => {
        const tweetsdata = Object.values(data.tweetsById);
        setTweets(tweetsdata);
      });
  }, [profileId]);

  //fetch tweets that matches with :profile

  if (profile === null) {
    return "loading";
  }

  return (
    <Wrapper>
      <Banner src={profile.profile.bannerSrc} />
      <div>
        <Avatar src={profile.profile.avatarSrc} />
      </div>
      <button>Following</button>
      <div>{profile.profile.displayName}</div>
      <div>{profile.profile.handle}</div>
      <div>Joined {profile.profile.joined}</div>
      <div>{profile.profile.location}</div>
      <div>{profile.profile.numFollowing} Following</div>
      <div>{profile.profile.numFollowers} Followers</div>
      <ActionBar>
        <div>Tweets</div>
        <div>Media</div>
        <div>Likes</div>
      </ActionBar>

      {tweets.map((tweet) => (
        <BigTweet tweet={tweet} />
      ))}
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
