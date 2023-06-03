import React from 'react';
import styled from 'styled-components';
import { StoryList } from '../components/StoryList'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Home = () => {
  return (
    <HomeWrapper>
      <StoryList />
    </HomeWrapper>
  );
};