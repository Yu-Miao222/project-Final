/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable no-empty */
/* eslint-disable space-before-blocks */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-array-index-key */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { API_URL } from 'utils/urls';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import TagsVisual from './TagsVisual'

export const StoryCard = ({ singleStoryListItem }) => {
  // const userId = useSelector((store) => store.user.userId)
  const accessToken = useSelector((store) => store.user.accessToken);
  const [liked, setLiked] = useState([]);

  console.log(singleStoryListItem)

  // Like-function for stories
  const onLikeClick = async (storied) => {
    console.log('onLikeClick')
    console.log(liked)
    // const liked = useSelector((store) => store.)
    if (liked && liked.includes(storied)){
    } else {
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken
        }
      }
      await fetch(API_URL(`stories/${storied}`), options)
        .then((response) => {
          const resp = response
          const js = response.json()
          console.log(resp)
          console.log(js)
          // response.json()
        })
        .then(() => {
          console.log('liked')
          console.log(liked)
          setLiked(liked ? liked.concat(storied) : [storied])
          console.log('like updated')
          console.log(liked)
        })
    }
  }

  // // Delete-function for stories
  // const onDeleteClick = async (storied) => {
  //   const options = {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: accessToken
  //     }
  //   }
  //   await fetch(API_URL(`stories/${storied}`), options)
  //     .then((response) => response.json())
  //     .then(() => {
  //       location.reload()
  //     })
  // }

  // {/* {storyList && storyList.map((singleStory) => */}
  return (
    <StoryListWrapper>

      <StoryContainer key={singleStoryListItem._id}>
        {singleStoryListItem && (
          <DescriptionImagesTagsDiv>
            <Link to={`/stories/${singleStoryListItem.story._id}`}>
              <div>
                <img alt="storyImg" src={singleStoryListItem.story.storyImg} />
              </div>
              <DescriptionDiv>
                <h3>{singleStoryListItem.story.name}</h3>
                <p>{singleStoryListItem.story.storyContent}</p>
              </DescriptionDiv>
            </Link>
            <TagContainer>
              {singleStoryListItem.story.tags.map((tag, index) => {
                return <TagsVisual tag={tag} key={index} />
              })}
            </TagContainer>
          </DescriptionImagesTagsDiv>
        )}
        <LikedContainer>
          {/* {singleStoryListItem.userId === userId && <button type="button" onClick={() => onDeleteClick(singleStoryListItem._id)} storied={singleStoryListItem._id}>
            <svg
              width="10"
              height="15"
              viewBox="0 0 26 26"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L24 24M24 2L2 24" strokeLinecap="round" />
            </svg>
          </button>} */}
          <button type="button" onClick={() => onLikeClick(singleStoryListItem._id)} className={liked ? 'liked' : 'notLiked'}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M4.70578 7C7.14502 6.31101 6.42099 6.58643 7.00497 3.67711C7.06033 3.40131 7.00032 3.11252 6.88451 2.85616C6.70516 2.45912 6.52778 1.82495 6.8731 1.28872C7.4224 0.435745 10.2508 1.45384 10.0089 4.59507V5.24826C10.0089 5.80054 10.4566 6.24826 11.0089 6.24826H14.4347C14.665 6.24826 14.89 6.32691 15.0648 6.47692C16.1354 7.39542 16.3903 7.97571 15.2821 8.95345C15.924 9.95769 16.0948 10.4074 15.2821 11.4001C15.9239 12.5448 16.1746 12.7107 15.2821 13.913C15.8238 14.6375 15.5494 15.0549 15.0844 15.5581C14.832 15.8312 14.4473 15.9414 14.0842 15.861C11.3869 15.2638 6.53999 14.6426 5.37015 13.6L5.23293 14.4289C5.15302 14.9115 4.7356 15.2655 4.24636 15.2655H2.3424C1.80667 15.2655 1.3661 14.8433 1.3433 14.3081L1.03835 7.14871C1.01656 6.63699 1.38493 6.19152 1.89164 6.11684L3.35621 5.90099C3.76841 5.84024 4.17508 6.04143 4.37689 6.40594L4.70578 7Z" fill="#FFEEE3" />
              <path d="M5.37015 13.6L4.70578 7M5.37015 13.6C6.53999 14.6426 11.3869 15.2638 14.0842 15.861C14.4473 15.9414 14.832 15.8312 15.0844 15.5581C15.5494 15.0549 15.8238 14.6375 15.2821 13.913M5.37015 13.6L5.23293 14.4289C5.15302 14.9115 4.7356 15.2655 4.24636 15.2655H2.3424C1.80667 15.2655 1.3661 14.8433 1.3433 14.3081L1.03835 7.14871C1.01656 6.63699 1.38493 6.19153 1.89164 6.11684L3.35621 5.90099C3.76841 5.84024 4.17508 6.04143 4.37689 6.40594L4.70578 7M4.70578 7C7.14502 6.31101 6.42099 6.58643 7.00497 3.67711C7.06033 3.40131 7.00032 3.11252 6.88451 2.85616C6.70516 2.45912 6.52778 1.82495 6.8731 1.28872C7.4224 0.435745 10.2508 1.45384 10.0089 4.59507V5.24826C10.0089 5.80054 10.4566 6.24826 11.0089 6.24826H14.4347C14.665 6.24826 14.89 6.32691 15.0648 6.47692C16.1354 7.39542 16.3903 7.97571 15.2821 8.95345M15.2821 8.95345H13.3425M15.2821 8.95345C15.924 9.95769 16.0948 10.4074 15.2821 11.4001M15.2821 11.4001H12.9894M15.2821 11.4001C15.9239 12.5448 16.1746 12.7107 15.2821 13.913M15.2821 13.913H12.9894" stroke="black" strokeWidth="0.7" />
            </svg>
          </button>
          <p>{singleStoryListItem.likes} likes</p>
        </LikedContainer>
        <SmallDiv>
          <Link to={`/users/${singleStoryListItem.userId}`}>
            <p>{singleStoryListItem.username}&nbsp;&nbsp;</p>
            <span>{`${new Date(singleStoryListItem.createdAt).toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
              // hour: '2-digit',
              // minute: '2-digit',
              // hour12: false
            })}`}</span>
            {/* <p>{singleStoryListItem.isComplete}</p> */}
          </Link>
        </SmallDiv>
      </StoryContainer>
    </StoryListWrapper>
  )
}
// {/* )} */}
const StoryListWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px blue solid;
  border-radius: 18px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 10px;
  margin: 10px;
`
const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
 
`
const LikedContainer = styled.div`
 display: flex;
 flex-direction: row;
 
  p{
    color: red;
  }
`
const DescriptionImagesTagsDiv = styled.div`

  a{
    text-decoration: none;
  }
`
const SmallDiv = styled.div`
  
  p{
    color: pink;
    display: inline-block;
  }
  span{
    color: gray;
  }
  a{
    text-decoration: none;
  }
  
`
const DescriptionDiv = styled.div`
  h3{
    font-size: 28px;
    color: black;
  }
  p{
    font-size: 24px;
    color: green;
  }
`
const TagContainer = styled.div`
`
