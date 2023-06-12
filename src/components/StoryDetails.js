/* eslint-disable react/no-array-index-key */
import React from 'react';
// import { useSelector } from 'react-redux';
import { Tag } from './TagsVisual';

export const StoryDetails = ({ storyInfo }) => {
  // const [StoryDetails, setStoryDetails] = useState([]);
  // const accessToken = useSelector((store) => store.user.accessToken);
  return (
    <div>
      {storyInfo.map((story) => {
        return (
          <div>
            <h1>{story.name}</h1>
            <p>{story.storyContent}</p>
            <Tag>{story.tags.map((tag, index) => {
              return (
                <div key={index}>{tag}</div>
              )
            })}
            </Tag>
          </div>
        )
      })}
    </div>
  )
}