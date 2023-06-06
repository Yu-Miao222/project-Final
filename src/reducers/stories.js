import { createSlice } from '@reduxjs/toolkit';

const stories = createSlice({
  name: 'stories',
  initialState: {
    items: [],
    username: null,
    id: null,
    error: null
  },
  reducers: {
    setItems: (store, action) => {
      store.items = action.payload
    },
    setNewStory: (store, action) => {
      store.items.unshift(action.payload)
    },
    setDetailStory: (store, action) => {
      store.items = action.payload
    },
    setDetailedStory: (store, action) => {
      store.items = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    },
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setId: (store, action) => {
      store.id = action.payload
    }
  }
});
export default stories;