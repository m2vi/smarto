export interface CardProps {
  favoured?: boolean;
  genre_ids: number[];
  id: number;
  name: string;
  poster_path: string;
  type: 'series' | 'film';
  watched: boolean;
}

export interface MoviePageProps {
  sort: 'all' | 'favourites' | 'later' | 'films' | 'series';
}

export interface GenreProps {
  id: number;
  name: string;
}

export type GenreArray = Array<GenreProps>;
