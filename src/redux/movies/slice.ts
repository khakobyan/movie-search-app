import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MOVIES, MoviesState } from './types';

const initialState: MoviesState = {
  loading: false,
  movies: [], 
};

export const moviesSlice = createSlice({
  name: MOVIES,
  initialState,
  reducers: {
    setMovies: (state, { payload }: PayloadAction<Movie[]>) => {
      state.movies = payload;
    },
    setMoviesLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const { setMovies, setMoviesLoading } = moviesSlice.actions;
export default moviesSlice.reducer;
