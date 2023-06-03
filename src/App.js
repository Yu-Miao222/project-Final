import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from 'pages/Nav';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from 'reducers/user';
import thoughts from 'reducers/stories';
import { MyStory } from 'pages/MyStory';
import { CreateStoryForm } from 'pages/CreateStoryForm';
import { Provider } from 'react-redux';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #845ec2;
  color: #fff;
  padding: 20px;
`;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px); /* Subtract header height */
`;

export const App = () => {
  const reducer = combineReducers({
    user: user.reducer,
    thoughts: thoughts.reducer
  });
  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <HeaderWrapper>
          <Nav />
        </HeaderWrapper>
        <MainWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/MyStory" element={<MyStory />} />
            <Route path="/CreateStory" element={<CreateStoryForm />} />
          </Routes>
        </MainWrapper>
      </BrowserRouter>
    </Provider>
  );
};
