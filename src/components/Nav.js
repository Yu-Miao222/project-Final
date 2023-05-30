import React from 'react'
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <h1>
        <NavLink>Welcome to Stroy Creator</NavLink>
      </h1>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/MyStory">My Stroy</NavLink>
        </li>
      </ul>
    </nav>
  )
}
