import {API_KEY} from '@env';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWYyMjBlNzMyMDg2NjY0NzA0YWM0MTU1MTlhMzEwYSIsInN1YiI6IjY1ZDY0YzRiOTk3NGVlMDE3YjA1NzM2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C-jGXs7T4Rw4Z75eeVZ6HVCc1kc0HYo6BZroy2lB8Tw',
  },
};

export const fetchMovies = createAsyncThunk(
  'movie/fetchMovies',
  async (data, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/popular',
        {
          params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1,
          },
        },
      );
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default movieSlice.reducer;
