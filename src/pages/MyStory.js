import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { StoryList } from '../components/StoryList'

export const Mystory = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  useEffect(() => {
    // Your effect logic here
  }, []);

  if (!accessToken) {
    return <p>Please go to Login</p>;
  }

  return (
    <StoryList />
  );
}