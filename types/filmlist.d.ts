export interface CardProps {
  favoured: boolean;
  genre_ids: number[];
  id: number;
  name: {
    de: string;
    en: string;
    it: string;
  };
  original_language: string;
  original_name: string;
  poster_path: {
    de: string;
    en: string;
    it: string;
  };
  release_date: number | boolean;
  type: 'series' | 'film';
  url: string;

  watched: boolean;
}

export interface MoviePageProps {
  sort: 'all' | 'favourites' | 'later' | 'soon' | 'childish' | 'films' | 'series';
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

export interface StreamingServiceProps {
  href: string;
  id: string;
  languages: string[];
  name: string;
  original_name: string;
  poster_path: string;
  types: string[];
}
