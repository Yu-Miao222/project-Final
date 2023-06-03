/* eslint-disable max-len */
import React, { useState } from 'react'
import Checkbox from 'components/Checkbox'

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
  const [storyTitle, setStoryTitle] = useState();
  const [storyImg, setStoryImg] = useState();
  const [storyContent, setStoryContent] = useState();

  const handleOnChange = (event) => {
    const key = event.target.name;
    const currentValue = tags[key];
    setTags(() => ({
      ...tags,
      [key]: !currentValue
    }));
  }

  const handleStoryTitle = (event) => {
    setStoryTitle(event.target.value)
  };
  const handleStoryImg = (event) => {
    setStoryImg(event.target.value)
  };
  const handleStoryContent = (event) => {
    setStoryContent(event.target.value)
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Story title"
          value={storyTitle}
          onChange={handleStoryTitle} />
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
        <tag>
          <p>Fiction</p>
          <div>
            {FictionArray.map(({ title, value }) => <Checkbox key={value} title={title} value={value} handleOnChange={handleOnChange} tags={tags} />)}
          </div>
        </tag>
        <tag>
          <p>NonFiction</p>
          <div>
            {NonFictionArray.map(({ title, value }) => <Checkbox key={value} title={title} value={value} handleOnChange={handleOnChange} tags={tags} />)}
          </div>
        </tag>
        <button type="submit">Submit Story</button>
      </form>
    </div>
  )
}