import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux'
// import { useNavigate } from 'react-router-dom';
import stories from 'reducers/stories';
import { API_URL } from 'utils/urls';

export const StoryList = () => {
  const [liked, setLiked] = useState([]);
  // const accessToken = localStorage.getItem('accessToken')
  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch()
  const storyList = useSelector((store) => store.stories.items)
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!accessToken) {
  //     navigate('/login')
  //   }
  // }); // , [accessToken]);

  // Fetch all stores
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    }
    console.log(accessToken)
    fetch(API_URL('stories'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(stories.actions.setItems(data.response))
            dispatch(stories.actions.setError(null))
          })
        } else {
          batch(() => {
            dispatch(stories.actions.setItems([]))
            dispatch(stories.actions.setError(data.response))
          })
        }
      })
      .catch(((error) => {
        console.error('Error:', error)
      }))
  }, [])

  return (
    <div>
      <div>storyList = {JSON.stringify(storyList)}</div>
      <div>like = {JSON.stringify(liked)}</div>
      <button type="button" onClick={() => setLiked([...liked, 'Some Item'])}>Like an Item</button>
    </div>
  )
}