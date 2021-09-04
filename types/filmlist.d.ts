export interface CardProps {
  favoured: boolean;
  genre_ids: number[];
  _id?: number;
  id_db: number;
  name:
    | {
        de: string;
        en: string;
        it: string;
      }
    | string;
  original_language: string;
  original_name: string;
  poster_path:
    | {
        de: string;
        en: string;
        it: string;
      }
    | string;
  release_date: number | boolean;
  type: 'series' | 'film';
  url: string;
  watched: boolean;

  static?: string[];
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
