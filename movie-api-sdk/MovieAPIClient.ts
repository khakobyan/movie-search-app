import { transformKeys } from '@helpers';
import { Movie, SearchResult } from './types';
import { api } from '@services';

const API_KEY = 'TEST_TASK_API_KEY';

export const createMovieAPIClient = (apiKey: string): MovieAPIClient => {
  if (!apiKey || apiKey.trim() === '' || apiKey !== API_KEY) {
    throw new Error('API key is missing or invalid. Please provide a valid API key.');
  }

  return {
    fetchRandomMovies: async (): Promise<Movie[]> => {
      try {
        const response = await api.get('/', { params: { q: '' } });
        return response.data?.description.map(transformKeys);
      } catch (error) {
        console.error('Error fetching random movies:', error);
        throw error;
      }
    },

    searchMovies: async (query: string): Promise<SearchResult> => {
      try {
        const response = await api.get('/', { params: { q: query } });
        return response.data?.description.map(transformKeys);
      } catch (error) {
        console.error('Error searching movies:', error);
        throw error;
      }
    },

    getMovieDetails: async (query: string, index: string): Promise<Movie> => {
      try {
        const response = await api.get('/', { params: { q: query } });
        return response.data?.description.map(transformKeys)[index];
      } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
      }
    },
  };
};

interface MovieAPIClient {
  fetchRandomMovies: () => Promise<Movie[]>;
  searchMovies: (query: string) => Promise<SearchResult>;
  getMovieDetails: (query: string, index: string) => Promise<Movie>;
}
