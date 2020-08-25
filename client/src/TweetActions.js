//row of icons along the bottom
import React, { useState } from "react";
import { FiMessageCircle, FiRepeat, FiHeart, FiUpload } from "react-icons/fi";
import styled from "styled-components";

const TweetActions = ({ id, liked }) => {
  const [isLiked, setIsLiked] = useState(liked);

  const handleLikeIcon = () => {
    fetch(`/api/tweet/${id}/like`, {
      method: "PUT",
      body: JSON.stringify({ like: !isLiked }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => setIsLiked(!isLiked))
      .catch(console.error);
  };
  return (
    <Wrapper>
      <FiMessageCircle />
      <FiRepeat />
      <HeartButton>
        <FiHeart
          onClick={handleLikeIcon}
          style={{ color: isLiked ? "red" : "black" }}
        />
      </HeartButton>

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

const HeartButton = styled.button`
  text-decoration: none;
  border: 0;
  background: white;
`;

export default TweetActions;
