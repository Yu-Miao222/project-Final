import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import stories from 'reducers/stories';
import { API_URL } from 'utils/urls';
import { StoryCard } from './StoryCard';

export const StoryList = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/')
    }
  }); // , [accessToken]);

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
  return (
    <div>
      {storyList.map((story) => (
        <StoryCard
          key={story.id}
          story={story} />
      ))}
    </div>
  )
}