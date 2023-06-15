/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom';
import stories from 'reducers/stories';
import { API_URL } from 'utils/urls';
import styled from 'styled-components/macro';
import { StoryCard } from './StoryCard';

export const StoryList = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch()
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate('/')
  //   }
  // }, [accessToken, navigate]);

  // Fetch all stores
  useEffect(() => {
    console.log('useeffect storylist')
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    fetch(API_URL('stories'), options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          dispatch(stories.actions.setError(null));
          dispatch(stories.actions.setItems(data.response));
        } else {
          dispatch(stories.actions.setError(data.response));
          dispatch(stories.actions.setItems([]));
        }
      })
      .catch(((error) => {
        console.error('Error:', error)
      }))
  }, [accessToken, dispatch])
  const storyList = useSelector((store) => store.stories.items);

  console.log('storyList start')
  console.log(storyList)
  console.log('storyList end')
  storyList.map((story) => (
    console.log(story)
  ))

  return (
    <AllStoryWrapper>
      {storyList.map((storyListItem) => (
        <StoryCard
          key={storyListItem.story._id}
          singleStoryListItem={storyListItem} />
      ))}
    </AllStoryWrapper>
  )
}

const AllStoryWrapper = styled.div`
 padding: 3%;
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-gap: 5%;
 
`