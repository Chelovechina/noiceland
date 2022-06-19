import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  return data;
});

const initialState = {
  users: [],
  currentUser: null,
  status: 'loading',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.users = [];
      state.status = 'loading';
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.status = 'success';
    },
    [fetchUsers.rejected]: (state) => {
      state.users = 'error';
      state.posts = [];
    },
  },
});

export const getUserSelector = (userId) => (state) =>
  state.users.users.find((user) => user.id === userId);

export default usersSlice.reducer;
