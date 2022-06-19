import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ({ limit, currentPage }) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${currentPage}`,
  );
  return data;
});

export const fetchSinglePost = createAsyncThunk('posts/fetchSinglePost', async (postId) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return data;
});

export const initialState = {
  posts: [],
  currentPost: null,
  limit: 9,
  currentPage: 1,
  status: 'loading',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload + 1;
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.posts = [];
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.status = 'success';
    },
    [fetchPosts.rejected]: (state) => {
      state.status = 'error';
      state.posts = [];
    },

    [fetchSinglePost.pending]: (state) => {
      state.currentPost = null;
      state.status = 'loading';
    },
    [fetchSinglePost.fulfilled]: (state, action) => {
      state.currentPost = action.payload;
      state.status = 'success';
    },
    [fetchSinglePost.rejected]: (state) => {
      state.currentPost = null;
      state.status = 'error';
    },
  },
});

export const getPostsSelector = (state) => state.posts;
export const getCurrentPost = (state) => state.posts.currentPost;

export const { setCurrentPage } = postsSlice.actions;

export default postsSlice.reducer;
