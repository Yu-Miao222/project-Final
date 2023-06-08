/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable no-empty */
/* eslint-disable space-before-blocks */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-array-index-key */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { useSelector } from 'react-redux';
import { API_URL } from 'utils/urls';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TagsVisual from './TagsVisual'

export const StoryCard = ({ storyList, liked, setLiked }) => {
  // const userId = useSelector((store) => store.user.userId)
  const accessToken = useSelector((store) => store.user.accessToken);

  // Like-function for stories
  const onLikeClick = async (storied) => {
    if (liked.includes(storied)){
    } else {
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken
        }
      }
      await fetch(API_URL(`stories/${storied}`), options)
        .then((response) => response.json())
        .then(() => {
          setLiked(liked.concat(storied))
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

  return (
    <StoryListWrapper>
      {storyList && storyList.map((singleStory) =>
        <StoryContainer key={singleStory._id}>
          {singleStory.story && (
            <DescriptionImagesTagsDiv>
              <SmallDiv>
                <Link to={`/users/${singleStory.userId}`}>
                  {singleStory.username},{' '}
                  {`${new Date(singleStory.createdAt).toLocaleDateString('en-us', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false })}`}
                </Link>
              </SmallDiv>
              <Link to={`/stories/${singleStory._id}`}>
                {/* <ImageDiv>
                {singleStory.story.tags.includes('breakfast') ? <img src={BREAKFAST} /> : singleStory.story.tags.includes('lunch') ? <img src={LUNCH} /> : singleStory.story.tags.includes('dinner') ? <img src={DINNER} /> : singleRecipe.recipe.tags.includes('snack') ? <img src={SNACK} /> :  <img src={FOOD} />}
                </ImageDiv> */}
                <DescriptionDiv>
                  <h3>{singleStory.story.name}</h3>
                  <p>{singleStory.story.storyContent}</p>
                </DescriptionDiv>
              </Link>
              <TagContainer>
                {singleStory.story.tags.map((tag, index) => {
                  return <TagsVisual tag={tag} key={index} />
                })}
              </TagContainer>
            </DescriptionImagesTagsDiv>
          )}
          <LikedContainer>
            {/* {singleStory.userId === userId && <button type="button" onClick={() => onDeleteClick(singleStory._id)} storied={singleStory._id}>
              <svg
                width="10"
                height="15"
                viewBox="0 0 26 26"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L24 24M24 2L2 24" strokeLinecap="round" />
              </svg>
            </button>} */}
            <button type="button" onClick={() => onLikeClick(singleStory._id)} className={liked ? 'liked' : 'notLiked'}>
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
            <div>{singleStory.likes} likes</div>
          </LikedContainer>
        </StoryContainer>)}
    </StoryListWrapper>
  )
}

const StoryListWrapper = styled.div`
`
const StoryContainer = styled.div`
`
const LikedContainer = styled.div`
`
const DescriptionImagesTagsDiv = styled.div`
`
const SmallDiv = styled.div`
`
const DescriptionDiv = styled.div`
`
const TagContainer = styled.div`
`

