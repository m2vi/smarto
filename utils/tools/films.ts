import { CardProps, FilmConfigProps, GenreArray } from '@Types/filmlist';
import { MovieResult, TvResult } from 'moviedb-promise/dist/request-types';
import { removeDuplicates, searchArray, shuffle, sortByKey } from './array';

import moment from 'moment';

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
  version: 4,
  watched: true,
});

export const getReleaseDate = (release_date: string) => {
  const d = moment(release_date).toDate();
  return d;
};

export const isReleased = (release_date: number) => {
  return Math.sign(new Date().getTime() - release_date) === 1;
};

export const removeUnreleased = (array: CardProps[]) => array.filter(({ release_date }) => isReleased(release_date));

export const filter = (key: string, items: CardProps[]) => {
  switch (key) {
    case 'all':
      return sortByKey(searchArray(items, 'version', 4), 'name');
    case 'favourites':
      return sortByKey(searchArray(items, 'favoured', true), 'name');
    case 'new':
      return searchArray(items, 'version', 4).reverse();
    case 'later':
      return removeUnreleased(searchArray(items, 'watched', false).reverse());
    case 'soon':
      return sortByKey(
        items.filter(({ release_date }) => !isReleased(release_date)),
        'release_date',
      );
    case 'kids':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(10762) || i.genre_ids.includes(10751)),
        'name',
      );
    case 'films':
      return sortByKey(searchArray(items, 'type', 'film'), 'name');
    case 'series':
      return sortByKey(searchArray(items, 'type', 'series'), 'name');
    case 'shuffle':
      return shuffle(searchArray(items, 'version', 4));
    default:
      return [];
  }
};

// GOTTA MAKE THIS BETTER
export const filterCategories = (key: string, items: CardProps[]) => {
  switch (key) {
    case 'action':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(28)),
        'name',
      );
    case 'action & adventure':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(10759)),
        'name',
      );
    case 'adventure':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(12)),
        'name',
      );
    case 'animation':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(16)),
        'name',
      );
    case 'comedy':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(35)),
        'name',
      );
    case 'crime':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(80)),
        'name',
      );
    case 'documentary':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(99)),
        'name',
      );
    case 'drama':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(18)),
        'name',
      );
    case 'family':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(10751)),
        'name',
      );
    case 'fantasy':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(14)),
        'name',
      );
    case 'history':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(36)),
        'name',
      );
    case 'horror':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(27)),
        'name',
      );
    case 'kids':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(10762)),
        'name',
      );
    case 'music':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(10402)),
        'name',
      );
    case 'mystery':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(9648)),
        'name',
      );
    case 'news':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(10763)),
        'name',
      );
    case 'reality':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(10764)),
        'name',
      );
    case 'romance':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(10749)),
        'name',
      );
    case 'sci-fi & fantasy':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(10765)),
        'name',
      );
    case 'science fiction':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(878)),
        'name',
      );
    case 'soap':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(10766)),
        'name',
      );
    case 'talk':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(10767)),
        'name',
      );
    case 'thriller':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(53)),
        'name',
      );
    case 'tv movie':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(10770)),
        'name',
      );
    case 'war':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(10752)),
        'name',
      );
    case 'war & politics':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(10768)),
        'name',
      );
    case 'western':
      return sortByKey(
        items.filter(i => i.genre_ids.includes(37)),
        'name',
      );
    default:
      return [];
  }
};

export const sort = (sort: string, items: CardProps[], second?: boolean) => {
  if (second) return filterCategories(sort, items);
  return filter(sort, items);
};
