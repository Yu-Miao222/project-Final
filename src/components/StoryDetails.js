/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Tag } from './TagsVisual';

export const StoryDetails = ({ storyInfo }) => {
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