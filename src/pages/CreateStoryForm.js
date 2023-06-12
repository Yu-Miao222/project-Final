/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import styled from 'styled-components';
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
    <OutterWrapper>
      <InnerWrapper>
        <FormWrapper>
          <form onSubmit={onSubmit}>
            <label htmlFor="title">Story Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter your story tile"
              value={storyName}
              onChange={handleStoryName} />

            <label htmlFor="image">Story Image</label>
            <input
              type="url"
              id="image"
              placeholder="copy image address"
              value={storyImg}
              onChange={handleStoryImg} />

            <label htmlFor="content">Story Content</label>
            <textarea
              type="text"
              id="content"
              rows="8"
              cols="33"
              placeholder="Start your story here..."
              value={storyContent}
              onChange={handleStoryContent} />
          </form>
        </FormWrapper>
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
      </InnerWrapper>
    </OutterWrapper>
  )
}

const OutterWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  text-align: center;
  p {
    font-size: 22px;
    color: #0D2464;
    margin: 10px;
  }
  label {
    color: #6874A3;
    font-size: 18px;
    font-weight: 500;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
`
const InnerWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid #808FB0;
  box-shadow: 4px 4px 8px #6874A3;
  padding: 10px;
  margin: 120px;
  background-color: #ffffff; */
  button {
    background-color: #0D2464;
    border: none;
    border-radius: 20px;
    color: white;
    padding: 10px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin-top: 20px;
    cursor: pointer;
    }
`
const FormWrapper = styled.div`
  padding-top: 10%;
   
    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 30vw;
      height: auto;
    }
    input {  
      display: flex;
      padding: 10px;
      border: grey solid 1px;
      border-radius: 5px;
      width: 300px;
      cursor: pointer;
    }
    label {
      margin: 10px;
      padding-top: 5px;
      color: #0D2464;
      font-size: 24px;
      font-weight: 500;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    textarea {
      resize: none;
      width: 350px;
      height: 200px;
      border: grey solid 1px;
      border-radius: 5px;
      font-family: Arial, sans-serif;
    }       
`