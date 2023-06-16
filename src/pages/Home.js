import React from 'react';
import styled from 'styled-components/macro';

export const Home = () => {
  return (
    <HomeWrapper>
      <h2>Join our <span className="underlined underline-clip">Story</span> creator where <span className="underlined underline-mask">Everyone </span>is an <span className="underlined underline-overflow">Artist</span></h2>
      <ReferenceBox>
        <LearnLink><p>Want <br /> To learn <br /> how to write <br /> stories? </p><a href="https://soyouwanttowrite.org/blogs/syww/the-top-10-tips-for-writing-great-short-stories" className="anchor">Click Here</a></LearnLink>
        <VideoLink><iframe width="400" height="255" src="https://www.youtube.com/embed/qg0_FinB6EE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /></VideoLink>
      </ReferenceBox>
    </HomeWrapper>
  )
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  h2 {
    font-size: clamp(1rem, 5vmin, 8rem);
    font-family: sans-serif;
    color: #537188;
    margin-bottom: 5%;
  }
  .underlined {
  position: relative;
  }

  .underline-mask:after {
    content: '';
    position: absolute;
    top: 95%;
    width: 150%;
    aspect-ratio: 3 / 1;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    border: 6px solid hsl(280 80% 50%);
    --spread: 140deg;
    --start: 290deg;
    mask: conic-gradient(from var(--start), white 0 var(--spread), transparent var(--spread));
  }


  .underline-overflow {
    display: inline-block;
    overflow: hidden;
    padding-bottom: clamp(1rem, 2vmin, 2rem);
  }
  .underline-overflow:after {
    content: '';
    position: absolute;
    top: 100%;
    height: 150%;
    aspect-ratio: 2.5 / 1;
    left: 50%;
    transform: translate(-50%, -10%);
    border-radius: 50%;
    border: 6px solid hsl(10 80% 50%);
  }

  .underline-clip:after {
    content: '';
    position: absolute;
    top: 95%;
    width: 150%;
    aspect-ratio: 3 / 1;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    border: 6px solid hsl(130 80% 50%);
    /* Use a clip-path to hide and show the bits you want */
    clip-path: polygon(0 0, 50% 50%, 100% 0);
  }

`;

const ReferenceBox = styled.div`
  display: flex;
  flex-direction: row;
  
`
const LearnLink = styled.div`
  width: 400px;
  height: 252px;
  display: flex;
  flex-direction: row;
  border: 3px solid #808FB0;
  margin-right: 15px;
 
  background-color: #2B2730;
  color: #FFFBEB;
  p {
    font-size: 26px;
    font-weight: 300;
    font-style: italic;
    color: #0D2464;
    text-shadow: 2px 1px 1px  #9db4f1;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding: 5%;
  }
  a {
    font-size: 22px;
    font-weight: 500;
    padding: 15%;
  }
`
const VideoLink = styled.div`
  display: flex;
  margin-left: 15px;
`
