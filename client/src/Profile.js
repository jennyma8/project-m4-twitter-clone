import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import BigTweet from "./BigTweet";
import { format } from "date-fns";
import { AiOutlineCalendar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

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
      })
      .catch((error) => {
        console.log("error!");
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
      <Following>Following</Following>
      <div>
        <strong>{profile.profile.displayName}</strong>
      </div>
      <div>@ {profile.profile.handle}</div>
      <div>
        <AiOutlineCalendar /> Joined{" "}
        {format(new Date(profile.profile.joined), "LLLL y")}
      </div>
      <div>
        <GrLocation />
        {profile.profile.location}
      </div>
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
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
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
  justify-content: space-around;
  margin-right: 500px;
  width: 700px;
`;

const Following = styled.button`
  text-decoration: none;
  border: 0;
  background: blue;
  color: white;
  border-radius: 20px;
  margin-left: 600px;
  font-size: 20px;
  width: 110px;
  height: 40px;
`;
export default Profile;
