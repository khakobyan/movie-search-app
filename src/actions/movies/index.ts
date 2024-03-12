import { transformKeys } from '@helpers';
import { api } from '@services';
import { FETCH_MOVIES } from '@utils';
import { setMovies, setMoviesLoading } from 'src/redux/movies/slice';
import { AppDispatch } from 'src/redux/store';

export const fetchMovies = async (query_string: string, dispatch: AppDispatch) => {
  dispatch(setMoviesLoading(true));
  try {
    const res = await api.get(FETCH_MOVIES(query_string));
    const transformedData = res.data?.description.map(transformKeys);
    dispatch(setMovies(transformedData));
  } catch (error) {
    console.log('fetching movies error:', error);
  } finally {
    dispatch(setMoviesLoading(false));
  }
};
