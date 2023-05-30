import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from 'components/Nav';
import { Home } from 'components/Home';
import { Login } from 'components/Login';
import { MyStory } from 'components/MyStory';

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MyStory" element={<MyStory />} />
      </Routes>
    </BrowserRouter>
  )
}
