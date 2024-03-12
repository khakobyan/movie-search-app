export type Movie = {
  actors: string;
  aka: string;
  imdb_id: string;
  imdb_iv: string;
  imdb_url: string;
  img_poster: string;
  rank: number;
  title: string;
  year: number;
  photo_height: number;
  photo_width: number;
}

export interface SearchResult {
  totalResults: number;
  results: Movie[];
}
