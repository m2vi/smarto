import { genreList, isReleased, removeUnreleased } from './utils';
import { removeDuplicates, searchArray, shuffle, sortByKey } from '@utils/tools/array';

import { CardProps } from '@Types/filmlist';
import { FilmListItems } from '@config/filmlist';
import { matchSorter } from 'match-sorter';

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

class FilmlistUtil {
  genre: Genres;

  constructor() {
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

  private filterSort = (key: string, items: CardProps[]) => {
    switch (key) {
      case 'all':
        return sortByKey(items, 'name');
      case 'favourites':
        return sortByKey(searchArray(items, 'favoured', true), 'name');
      case 'new':
        return items.reverse();
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
        return shuffle(items);
      case 'unfiltered':
        return items.slice(0, items.length);
      case 'release':
        return sortByKey(items, 'release_date').reverse();
      default:
        return [];
    }
  };

  private sort = (type: 'default' | 'genres' | 'language', key: string) => {
    const items = FilmListItems;

    switch (type) {
      case 'default':
        return this.filterSort(key, items);
      case 'genres':
        return this.filterGenres(key, items);
      case 'language':
        return this.filterLanguage(key, items);
      default:
        return [];
    }
  };

  private search = (query: string, items: CardProps[]) => {
    return matchSorter(items, query, { keys: ['name', 'original_name'] });
  };

  private cut = (items: CardProps[], start: number, offset: number = 50) => {
    return offset === 0 ? items : items.slice(start, offset + start);
  };

  public find = (type: 'default' | 'genres' | 'language', key: string, start: number = 0, offset: number = 50, query?: string) => {
    const items = this.sort(type, key);
    if (query) {
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
      FilmListItems.forEach(v => {
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
      const allLanguages = FilmListItems.map(({ original_language }) => original_language);
      const counts = {} as any;
      allLanguages.forEach(x => {
        counts[x] = (counts[x] || 0) + 1;
      });

      return counts;
    };

    const defaultSort = () => {
      return {
        all: FilmListItems.length,
        favourites: FilmListItems.filter(v => v.favoured).length,
        new: FilmListItems.length,
        later: FilmListItems.filter(v => !v.watched).length,
        soon: FilmListItems.filter(v => !isReleased(v.release_date)).length,
        kids: FilmListItems.filter(i => i.genre_ids.includes(10762) || i.genre_ids.includes(10751)).length,
        films: FilmListItems.filter(v => v.type === 'film').length,
        series: FilmListItems.filter(v => v.type === 'series').length,
        shuffle: FilmListItems.length,
        unfiltered: FilmListItems.length,
        release: FilmListItems.length,
      };
    };

    return {
      genres: genres(),
      languages: languages(),
      default: defaultSort(),
      all: Object.assign({}, genres(), languages(), defaultSort()),
    };
  };
}

export const filmlistUtil = new FilmlistUtil();

export default new FilmlistUtil();
