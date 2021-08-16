export interface CardProps {
  backdrop_path: string;
  favoured?: boolean;
  genre_ids: number[];
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  release_date: string;
  type: 'series' | 'film';
  version: number;
  watched: boolean;

  childish?: boolean;
}

export interface MoviePageProps {
  sort: 'all' | 'favourites' | 'childish' | 'later' | 'films' | 'series';
}

export interface GenreProps {
  id: number;
  name: string;
}

export type GenreArray = Array<GenreProps>;

export interface FilmConfigProps {
  showChildish: boolean;
  showUnpublished: boolean;
  sort: 'name' | 'release_date' | 'randomize';
}
