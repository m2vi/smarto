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

  private filterCategories = (key: string, items: CardProps[]) => {
    const filtered = items.filter(i => i.genre_ids.includes(this.genre.getIDs([key])[0]));
    return sortByKey(filtered, 'name');
  };

  private filterSort = (key: string, items: CardProps[]) => {
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

  private sort = (type: 'default' | 'categories' | 'language', key: string) => {
    const items = FilmListItems;

    switch (type) {
      case 'default':
        return this.filterSort(key, items);
      case 'categories':
        return this.filterCategories(key, items);
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
    return items.slice(start, offset + start);
  };

  public find = (type: 'default' | 'categories' | 'language', key: string, start: number = 0, query?: string) => {
    const items = this.sort(type, key);
    if (query) {
      return this.cut(this.search(query, items), start);
    } else {
      return this.cut(items, start);
    }
  };
}

export const filmlistUtil = new FilmlistUtil();

export default new FilmlistUtil();
