import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 10px; 
  }
  a.active {
    text-decoration: underline;
  }
`;

const HeaderText = styled.h1`
  margin: 0;
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
          <StyledNavLink to="/MyStory">My Story</StyledNavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

