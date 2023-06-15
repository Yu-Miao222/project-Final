import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
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

const HeaderText = styled.h1`
  margin: 0 10px;
  padding: 0 10px;
  font-size: 36px;
  font-style: italic;

`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none; 
`;

export const Nav = () => {
  return (
    <NavWrapper>
      <HeaderText>
        <StyledNavLink to="/">Your Story Creator</StyledNavLink>
      </HeaderText>
      <ul>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Login">Login</StyledNavLink>
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

