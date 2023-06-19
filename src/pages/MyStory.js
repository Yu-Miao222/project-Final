import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { StoryList } from '../components/StoryList'

export const Mystory = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  useEffect(() => {
    // effect logic
  }, []);

  if (!accessToken) {
    return <LoginBox><p>Please go to Login...</p></LoginBox>;
  }

  return (
    <StoryList />
  );
}
const LoginBox = styled.div`
  display: inline-block;
  position: fixed;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  /* height: 50%;
  width: 40%;
  background-color: #F3F3FB;
  border: 1px solid #808FB0;
  border-radius: 10px;
  box-shadow: 4px 4px 8px #6874A3; */

  p{
    display: flex;
    font-size: 36px;
    font-weight: 300;
    font-style: italic;
    color: #9540BF;
    text-shadow: 2px 1px 1px  #0D2464;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding: 15%;
   
    // typing animation 
    letter-spacing: 10px;
    border-right: 5px,solid;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation:
        typing 3s steps(21),
        cursor .4s step-end infinite alternate;
  }
  @keyframes cursor {
    50% { border-color: transparent}
  }
  @keyframes typing {
    from { width: 0}
  }
`