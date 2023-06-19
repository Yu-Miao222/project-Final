/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom';
import stories from 'reducers/stories';
import { API_URL } from 'utils/urls';
import styled from 'styled-components/macro';
import user from 'reducers/user';
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
  const onLogoutButtonClick = () => {
    dispatch(user.actions.setAccessToken(null));
    dispatch(user.actions.setUsername(null));
    dispatch(user.actions.setUserId(null));
    dispatch(user.actions.setError(null));
  }

  return (
    <AllStoryWrapper>
      <button type="button" onClick={onLogoutButtonClick} id="logout">LOGOUT</button>
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
 display: flex;
 flex-direction: column;

 #logout {
    width:10%;
    background-color: #0D2464;
    border: none;
    border-radius: 20px;
    color: white;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 10px 2px;
    cursor: pointer;
    }
`