import React from "react";
import { RiNotification2Line } from "react-icons/ri";
import { FiBookmark, FiUser, FiHome } from "react-icons/fi";
import Logo from "../src/assets/logo.svg";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "./constants";

const Sidebar = () => {
  return (
    <Wrapper>
      <div>
        <img src={Logo} />

        <ul>
          <li>
            <FiHome />

            <NavigationLink to="/">Home</NavigationLink>
          </li>
          <li>
            <FiUser />
            <NavigationLink to="/profile/:profileId">Profile</NavigationLink>
          </li>
          <li>
            <RiNotification2Line />
            <NavigationLink to="/notifications">Notifications</NavigationLink>
          </li>
          <li>
            <FiBookmark />
            <NavigationLink to="/bookmarks">Bookmarks</NavigationLink>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const NavigationLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-left: 15px;
  display: inline-block;
  &:hover {
    color: ${COLORS.primary};
  }
`;

const Wrapper = styled.div`
  margin: 2px;
`;

export default Sidebar;
