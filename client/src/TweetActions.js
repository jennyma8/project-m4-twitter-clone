//row of icons along the bottom
import React from "react";
import { FiMessageCircle, FiRepeat, FiHeart, FiUpload } from "react-icons/fi";
import styled from "styled-components";

const TweetActions = () => {
  return (
    <Wrapper>
      <FiMessageCircle />
      <FiRepeat />
      <FiHeart /># likes
      <FiUpload />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default TweetActions;
