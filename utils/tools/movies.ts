import { FilmListItems } from '@config/filmlist';
import { CardProps, FilmConfigProps, GenreArray } from '@Types/filmlist';
import moment from 'moment';
import { MovieResult, TvResult } from 'moviedb-promise/dist/request-types';
import { removeDuplicates, searchArray, shuffle, sortByKey } from './array';

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

export const genres = (genres: number[], type: 'series' | 'film'): string => {
  const { films, series } = genreList;
  let g: string[] = [];

  if (type === 'film') {
    genres.forEach(genreId => {
      const curr = films.find(genre => genreId === genre.id);
      if (curr) g.push(curr.name);
    });
  } else if (type === 'series') {
    genres.forEach(genreId => {
      const curr = series.find(genre => genreId === genre.id);
      if (curr) g.push(curr.name);
    });
  }

  return g.join(', ');
};

export const refactorMovie = ({
  backdrop_path,
  genre_ids,
  id,
  title: name,
  original_language,
  original_title: original_name,
  overview,
  poster_path,
  release_date,
}: MovieResult): CardProps => ({
  backdrop_path,
  favoured: false,
  genre_ids,
  id,
  name,
  original_language,
  original_name,
  overview,
  poster_path,
  release_date: getReleaseDate(release_date).getTime(),
  type: 'film',
  version: 2,
  watched: true,
});

export const refactorSeries = ({
  backdrop_path,
  genre_ids,
  id,
  name,
  original_language,
  original_name,
  overview,
  poster_path,
  first_air_date: release_date,
}: TvResult): CardProps => ({
  backdrop_path,
  favoured: false,
  genre_ids,
  id,
  name,
  original_language,
  original_name,
  overview,
  poster_path,
  release_date: getReleaseDate(release_date).getTime(),
  type: 'series',
  version: 2,
  watched: true,
});

export const getReleaseDate = (release_date: string) => {
  const d = moment(release_date).toDate();
  return d;
};

export const applyConfig = ({ showChildish, showUnpublished, sort }: FilmConfigProps) => {
  let bin: CardProps[] = FilmListItems;

  if (showChildish === false) {
    bin = bin.filter(item => item.childish === false);
  }
  if (showUnpublished === false) {
    bin = bin.filter(({ release_date }) => {
      return Math.sign(new Date().getTime() - release_date) === 1;
    });
  }
};

export const isReleased = (release_date: number) => {
  return Math.sign(new Date().getTime() - release_date) === 1;
};

export const removeUnreleased = (array: CardProps[]) => array.filter(({ release_date }) => isReleased(release_date));

export const filter = (key: string, value: any) => {
  if (key === 'soon') {
    let bin = FilmListItems;

    bin = bin.filter(({ release_date }) => {
      return !isReleased(release_date);
    });

    return sortByKey(bin, 'release_date');
  } else {
    return sortByKey(searchArray(FilmListItems, key, value), 'name');
  }
};

export const sort = (sort: string) => {
  switch (sort) {
    case 'all':
      return sortByKey(FilmListItems, 'name');
    case 'favourites':
      return filter('favoured', true);
    case 'later':
      return removeUnreleased(filter('watched', false));
    case 'soon':
      return filter('soon', false);
    case 'childish':
      return filter('childish', true);
    case 'films':
      return filter('type', 'film');
    case 'series':
      return filter('type', 'series');
    default:
      return [];
  }
};