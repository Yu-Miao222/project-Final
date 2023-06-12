/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import user from 'reducers/user';
import { API_URL } from 'utils/urls';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState('login');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((store) => store.user.accessToken);
  useEffect(() => {
    console.log('login useeffect')
    if (accessToken) {
      console.log('login accesstoken ok')
      navigate('/')
    } else {
      console.log('login no token')
    }
  }, [accessToken, navigate]);
  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }
    fetch(API_URL(mode), options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log(data)
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setError(null));
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response))
        }
      })
  }

  return (
    <OuterWrapper>
      <InnerWrapper>
        <FormWrapper>
          <p> Join our story creator </p>
          <p> Where everyone is an artist</p>
          <form onSubmit={onFormSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
          </form>
        </FormWrapper>
        <RLWrapper>
          <label htmlFor="register">Register</label>
          <input
            type="radio"
            id="register"
            checked={mode === 'register'}
            onChange={() => setMode('register')} />
          <label htmlFor="login">Login</label>
          <input
            type="radio"
            id="login"
            checked={mode === 'login'}
            onChange={() => setMode('login')} />
        </RLWrapper>
      </InnerWrapper>
    </OuterWrapper>

  )
}

const OuterWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  text-align: center;

`
const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border: 1px solid #808FB0;
    border-radius: 10px;
    box-shadow: 4px 4px 8px #6874A3;
    margin: 3%;
    background-color: #F3F3FB;

`
const FormWrapper = styled.div`
  
    p {
        font-size: 26px;
        font-weight: 500;
        color: #0D2464;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        padding: 10px;
    }
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
    }
    input {  
        display: flex;
        margin: 5px;
        padding: 10px;
        border-radius: 5px;
        width: 200px;
        cursor: pointer;
    }
    button {
        background-color: #0D2464;
        border: none;
        border-radius: 20px;
        color: white;
        padding: 10px 30px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        margin: 10px 2px;
        cursor: pointer;
    }
`
const RLWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

