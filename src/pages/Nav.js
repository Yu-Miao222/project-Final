import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const NavWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  ul {
    display: flex;
    list-style-type: none;
    margin-left: 50%;
  }

  li {
    padding: 0 15px;
  }
  a.active {
    text-decoration: underline;
  }
`;

const HeaderText = styled.div`
  h1{
  margin: 0 10px;
  padding: 0 10px;
  font-size: 36px;
  font-weight: 600;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none; 
`;

export const Nav = () => {
  return (
    <NavWrapper>
      <HeaderText>
        <StyledNavLink to="/"><h1>Your Story Creator</h1></StyledNavLink>
      </HeaderText>
      <ul>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Login">Login/Register</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/CreateStory">CreateStory</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/MyStory">MyStory</StyledNavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

