import { CardProps, GenreArray } from '@Types/filmlist';
import { MovieResult, TvResult } from 'moviedb-promise/dist/request-types';

import moment from 'moment';
import { removeDuplicates } from '../tools/array';

export const genreList: { films: GenreArray; series: GenreArray } = {
  films: [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'History',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Music',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV Movie',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ],
  series: [
    {
      id: 10759,
      name: 'Action & Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 10762,
      name: 'Kids',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10763,
      name: 'News',
    },
    {
      id: 10764,
      name: 'Reality',
    },
    {
      id: 10765,
      name: 'Sci-Fi & Fantasy',
    },
    {
      id: 10766,
      name: 'Soap',
    },
    {
      id: 10767,
      name: 'Talk',
    },
    {
      id: 10768,
      name: 'War & Politics',
    },
    {
      id: 37,
      name: 'Western',
    },
  ],
};

class Genres {
  public array() {
    const { films, series } = genreList;
    const all = removeDuplicates(films.concat(series));
    return all as { id: number; name: string }[];
  }

  public getNames(genre_ids: number[]) {
    return genre_ids.map(id => this.array().find(genre => genre.id === id).name);
  }

  public getIDs(genre_names: string[]) {
    return genre_names.map(name => this.array().find(genre => genre.name.toLowerCase() === name.toLowerCase()).id);
  }
}

export const genres = new Genres();

export const refactorMovie = ({
  genre_ids,
  id,
  title: name,
  original_language,
  original_title: original_name,
  poster_path,
  release_date,
}: MovieResult): CardProps => ({
  favoured: false,
  genre_ids,
  id,
  name,
  original_language,
  original_name,
  poster_path,
  release_date: getReleaseDate(release_date).getTime(),
  type: 'film',
  url: `https://www.themoviedb.org/movie/${id}`,
  version: 4,
  watched: true,
});

export const refactorSeries = ({
  genre_ids,
  id,
  name,
  original_language,
  original_name,
  poster_path,
  first_air_date: release_date,
}: TvResult): CardProps => ({
  favoured: false,
  genre_ids,
  id,
  name,
  original_language,
  original_name,
  poster_path,
  release_date: getReleaseDate(release_date).getTime(),
  type: 'series',
  url: `https://www.themoviedb.org/tv/${id}`,
  version: 4,
  watched: true,
});

export const getReleaseDate = (release_date: string) => moment(release_date).toDate();

export const isReleased = (release_date: number) => Math.sign(new Date().getTime() - release_date) === 1;

export const removeUnreleased = (array: CardProps[]) => array.filter(({ release_date }) => isReleased(release_date));
