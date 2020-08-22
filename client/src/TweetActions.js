//row of icons along the bottom
import React from "react";
import { FiMessageCircle, FiRepeat, FiHeart, FiUpload } from "react-icons/fi";
import styled from "styled-components";

const TweetActions = () => {
  return (
    <Wrapper>
      <FiMessageCircle />
      <FiRepeat />
      <FiHeart />
      <FiUpload />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 75px;
  margin-top: 10px;
`;

export default TweetActions;
