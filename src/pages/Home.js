import React from 'react';
import styled from 'styled-components';
import { Story } from '../components/Story'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  flex: 1;
`;

export const Home = () => {
  return (
    <HomeWrapper>
      <LeftSection>
        <Story />
      </LeftSection>
      <RightSection>
        <div>Story Creator</div>
      </RightSection>
    </HomeWrapper>
  );
};