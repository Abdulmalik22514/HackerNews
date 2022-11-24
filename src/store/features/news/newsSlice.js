import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  news: [],
  error: '',
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  try {
    const res = await axios.get(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
    );
    return res.data;
  } catch (err) {
    return console.log(err);
  }
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchNews.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
      state.error = '';
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.news = [];
      state.error = action.error.message;
    });
  },
});

export default newsSlice.reducer;
