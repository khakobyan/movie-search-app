import type { RootState } from '../store';
import { Movie, MoviesState } from './types';

export const getMovies = (state: RootState): MoviesState => {
  return state.movies || [];
};

export const getMovie = (state: RootState, index: number): Movie | undefined => {
  const movies = getMovies(state);
  return movies.movies[index];
};