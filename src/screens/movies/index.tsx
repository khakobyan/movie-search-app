import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { MAContainer, MASearch, MAList } from '@components';
import { useAppSelector, useAppDispatch } from 'src/redux/hooks';
import { fetchMovies } from 'src/actions';
import { getMovies } from 'src/redux/movies/selectors';

export const MoviesScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useAppDispatch();
  const { loading, movies } = useAppSelector(getMovies);

  useEffect(() => {
    fetchMoviesData();
  }, []);

  const fetchMoviesData = useCallback(async () => {
    await fetchMovies(searchInput, dispatch);
  }, [dispatch, searchInput]);

  const handleSearchPress = useCallback(() => {
    fetchMoviesData();
  }, [fetchMoviesData, searchInput]);

  return (
    <MAContainer>
      <View>
        <MASearch 
          value={searchInput}
          onChange={setSearchInput}
          onSearchPress={handleSearchPress}
          loading={loading}
        />
          <MAList data={movies} loading={loading} />
      </View>
    </MAContainer>
  );
};
