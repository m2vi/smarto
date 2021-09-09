import { genreList, getReleaseDate, isReleased, removeUnreleased } from './utils';
import { removeDuplicates, searchArray, shuffle, sortByKey } from '@utils/tools/array';

import { CardProps } from '@Types/filmlist';
import { MovieDb } from 'moviedb-promise';
import { baseUrl } from '@utils/tools/utils';
import { matchSorter } from 'match-sorter';
import { fetchWithCache } from '@utils/db/fetch';

class Genres {
  private array() {
    const { films, series } = genreList;
    const all = removeDuplicates(films.concat(series));
    return all as { id: number; name: string }[];
  }

  public getNames(genre_ids: number[]) {
    return genre_ids.map(id => this.array().find(genre => genre.id === id)?.name);
  }

  public getIDs(genre_names: string[]) {
    return genre_names.map(name => this.array().find(genre => genre.name.toLowerCase() === name.toLowerCase())?.id);
  }
}

export const fetchItems = async (req: any, locale: string, dontCache?: boolean) => {
  return await fetchWithCache(`${baseUrl(req)}/api/filmlist/all?locale=${locale}`, 60 * 24, dontCache);
};

export class FilmlistUtil {
  genre: Genres;

  constructor(public items: CardProps[]) {
    this.genre = new Genres();
  }

  private filterLanguage = (key: string, items: CardProps[]) => {
    const filtered = items.filter(i => i.original_language === key);
    return sortByKey(filtered, 'name');
  };

  private filterGenres = (key: string, items: CardProps[]) => {
    const filtered = items.filter(i => i.genre_ids.includes(this.genre.getIDs([key])[0]));
    return sortByKey(filtered, 'name');
  };

  private reverse(a: any[]) {
    return a.map((item, idx) => a[a.length - 1 - idx]);
    // Somehow the normal reverse doesn't work
  }

  private filterSort = (key: string, items: CardProps[]) => {
    switch (key) {
      case 'all':
        return sortByKey(searchArray(items, 'watched', null), 'name');
      case 'favourites':
        return sortByKey(searchArray(items, 'favoured', true), 'name');
      case 'new':
        return this.reverse(items);
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
      // other
      case 'shuffle':
        return shuffle(searchArray(items, 'watched', null));
      case 'unfiltered':
        return items.slice(0, items.length);
      case 'release':
        return sortByKey(searchArray(items, 'watched', null), 'release_date').reverse();
      default:
        return [];
    }
  };

  private sort = (type: 'default' | 'genre' | 'language' | 'find', key: string, locale: string) => {
    const items = this.items;

    switch (type) {
      case 'default':
        return this.filterSort(key, items);
      case 'genre':
        return this.filterGenres(key, items);
      case 'language':
        return this.filterLanguage(key, items);
      default:
        return [];
    }
  };

  private search = (query: string, items: CardProps[]) => {
    return matchSorter(items, query, { keys: ['name.en', 'name.de', 'name.it', 'original_name'] });
  };

  private cut = (items: CardProps[], start: number, offset: number = 50) => {
    return offset === 0 ? items : items.slice(start, offset + start);
  };

  public find = (
    locale: string,
    type: 'default' | 'genre' | 'language' | 'find',
    key: string,
    start: number = 0,
    offset: number = 50,
    query?: string,
    reverse?: boolean,
  ) => {
    const items = !reverse ? this.sort(type, key, locale) : this.sort(type, key, locale).reverse();
    if (query || (type === 'find' && key)) {
      if (type === 'find' && key) query = key;

      return this.cut(this.search(query, items), start, offset);
    } else if (key === 'unfiltered') {
      return items;
    } else {
      return this.cut(items, start, offset);
    }
  };

  public max = () => {
    const genres = () => {
      const allGenres = [];
      this.items.forEach(v => {
        v.genre_ids.forEach(v => allGenres.push(v));
      });

      const counts = {} as any;
      allGenres.forEach(x => {
        const y = this.genre.getNames([x])[0].toLowerCase();

        counts[y] = (counts[y] || 0) + 1;
      });

      return counts;
    };

    const languages = () => {
      const allLanguages = this.items.map(({ original_language }) => original_language);
      const counts = {} as any;
      allLanguages.forEach(x => {
        counts[x] = (counts[x] || 0) + 1;
      });

      return counts;
    };

    const defaultSort = () => {
      return {
        all: this.items.length,
        favourites: this.items.filter(v => v.favoured).length,
        new: this.items.length,
        later: this.items.filter(v => !v.watched).length,
        soon: this.items.filter(v => !isReleased(v.release_date)).length,
        kids: this.items.filter(i => i.genre_ids.includes(10762) || i.genre_ids.includes(10751)).length,
        films: this.items.filter(v => v.type === 'film').length,
        series: this.items.filter(v => v.type === 'series').length,
        shuffle: this.items.length,
        unfiltered: this.items.length,
        release: this.items.length,
      };
    };

    return {
      genres: genres(),
      languages: languages(),
      default: defaultSort(),
      all: Object.assign({}, genres(), languages(), defaultSort()),
    };
  };

  public async get(id: string | number, type: string, favoured: boolean = false, watched: boolean = true) {
    const db = new MovieDb(process.env.MOVIE_TOKEN);
    const data = (type === 'film' ? await db.movieInfo({ id: id.toString() }) : await db.tvInfo({ id: id.toString() })) as any;

    const names = async () => {
      let bin = ['de-DE', 'en-UK', 'it'];

      const stuff = await Promise.all(
        bin.map(async language => {
          return type?.toString() === 'film'
            ? (await db.movieInfo({ id: id?.toString(), language })).title
            : (await db.tvInfo({ id: id?.toString(), language })).name;
        }),
      );

      let bin2 = ['de-DE', 'en-UK', 'it'];

      const stuff2 = await Promise.all(
        bin2.map(async language => {
          return type?.toString() === 'film'
            ? (await db.movieInfo({ id: id?.toString(), language })).poster_path
            : (await db.tvInfo({ id: id?.toString(), language })).poster_path;
        }),
      );

      return [
        {
          de: stuff[0],
          en: stuff[1],
          it: stuff[2],
        },
        {
          de: stuff2[0],
          en: stuff2[1],
          it: stuff2[2],
        },
      ];
    };

    // TODO: get both from one request
    const np = await names();

    if (type.toString() === 'film') {
      return {
        favoured: favoured?.toString() === 'true' ? true : false,
        genre_ids: data?.genres.map(g => g.id),
        id_db: data?.id,
        name: np[0],
        original_language: data?.original_language,
        original_name: data?.original_title,
        poster_path: np[1],
        release_date: data?.release_date ? getReleaseDate(data?.release_date).getTime() : false,
        type: 'film',
        url: `https://www.themoviedb.org/movie/${data?.id}`,
        watched: watched?.toString() === 'false' ? false : true,
      } as CardProps;
    } else {
      return {
        favoured: favoured ? true : false,
        genre_ids: data?.genres.map(g => g.id),
        id_db: data?.id,
        name: np[0],
        original_language: data?.original_language,
        original_name: data?.original_name,
        poster_path: np[1],
        release_date: data?.first_air_date ? getReleaseDate(data?.first_air_date).getTime() : false,
        type: 'film',
        url: `https://www.themoviedb.org/movie/${data?.id}`,
        watched: watched?.toString() === 'false' ? false : true,
      } as CardProps;
    }
  }
}
