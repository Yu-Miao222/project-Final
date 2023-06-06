import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import stories from 'reducers/stories';
import { API_URL } from 'utils/urls';
import user from 'reducers/user';

export const Mystory = () => {
  const storyItems = useSelector((store) => store.stories.items);
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);
  const username = useSelector((store) => store.user.username);
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate('/MyStory')
    }
  });

  useEffect(() => {
    console.log(accessToken)
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
        if (data.success) {
          dispatch(stories.actions.setError(null));
          dispatch(stories.actions.setItems(data.response));
        } else {
          dispatch(stories.actions.setError(data.response));
          dispatch(stories.actions.setItems([]));
        }
      });
  }, [accessToken, dispatch])

  const onLogoutButtonClick = () => {
    dispatch(user.actions.setAccessToken(null));
    dispatch(user.actions.setUsername(null));
    dispatch(user.actions.setUserId(null));
    dispatch(user.actions.setError(null));
    dispatch(stories.actions.setItems([]));
  }
  return (
    <>
      <button type="button" onClick={onLogoutButtonClick}>LOGOUT</button>
      {username ? (<h2>THESE ARE THE Stories OF {username.toUpperCase()}</h2>) : ''}
      {storyItems.map((item) => {
        return (<p key={item.id}>{item.message}</p>)
      })}
    </>
  );
}