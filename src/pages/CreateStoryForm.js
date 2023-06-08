/* eslint-disable max-len */
import React, { useState } from 'react'
import Checkbox from 'components/Checkbox'
import { API_URL } from 'utils/urls';
import stories from 'reducers/stories';
import { useDispatch, useSelector } from 'react-redux';

export const FictionArray = [
  { value: 'fantasy', title: 'Fantasy' },
  { value: 'adventure', title: 'Adventure' },
  { value: 'mystery', title: 'Mystery' },
  { value: 'historical', title: 'Historical' }
];
export const NonFictionArray = [
  { value: 'history', title: 'History ' },
  { value: 'art', title: 'Art' },
  { value: 'travel', title: 'Travel' },
  { value: 'nature', title: 'Nature' }
];

export const CreateStoryForm = () => {
  const [tags, setTags] = useState({});
  const [storyName, setStoryName] = useState();
  const [storyImg, setStoryImg] = useState();
  const [storyContent, setStoryContent] = useState();
  // const dispatch = useDispatch;
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.accessToken);

  const convertTagsToArray = (tagsObject) => {
    const tagsArray = [];
    Object.keys(tagsObject).forEach((key) => {
      if (tagsObject[key] === true) {
        tagsArray.push(key);
      }
    })
    return tagsArray;
  }
  // Submit new story
  const onSubmit = () => {
    const options = {
      method: 'POST',
      headers: {
        Authorization: accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        story: {
          name: storyName,
          storyImg,
          storyContent,
          tags: convertTagsToArray
        }
      })
    }
    fetch(API_URL('stories'), options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(stories.actions.setNewStory(data.response))
      })
  }
  const handleStoryName = (event) => {
    setStoryName(event.target.value)
  };
  const handleStoryImg = (event) => {
    setStoryImg(event.target.value)
  };
  const handleStoryContent = (event) => {
    setStoryContent(event.target.value)
  };

  const handleOnChange = (event) => {
    const key = event.target.name;
    const currentValue = tags[key];
    setTags(() => ({
      ...tags,
      [key]: !currentValue
    }));
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Story title"
          value={storyName}
          onChange={handleStoryName} />
        <input
          type="url"
          placeholder="upload an image to your story"
          value={storyImg}
          onChange={handleStoryImg} />
        <input
          type="text"
          placeholder="Start your story here"
          value={storyContent}
          onChange={handleStoryContent} />
        <div>
          <p>Fiction</p>
          <div>
            {FictionArray.map(({ title, value }) => <Checkbox key={value} title={title} value={value} handleOnChange={handleOnChange} tags={tags} />)}
          </div>
        </div>
        <div>
          <p>NonFiction</p>
          <div>
            {NonFictionArray.map(({ title, value }) => <Checkbox key={value} title={title} value={value} handleOnChange={handleOnChange} tags={tags} />)}
          </div>
        </div>
        <button type="submit">Submit Story</button>
      </form>
    </div>
  )
}