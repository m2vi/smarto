import { fetchItems, FilmlistUtil } from '@utils/films/main';
import { sortByKey } from '@utils/tools/array';
import { baseUrl } from '@utils/tools/utils';
import { fetchWithCache } from './fetch';

export const fetchBasicProps = async (locale, req) => {
  const base = `${baseUrl(req)}/api`;

  const me = await fetchWithCache(`${base}/@me`, 60 * 24 * 3);
  const settings = await fetchWithCache(`${base}/@settings`, 60 * 24 * 3);

  return {
    me,
    settings,
    locale,
  };
};

export const fetchFilmlistProps = async (req, locale, type, key, method = 'normal', query?, items?) => {
  const util = new FilmlistUtil(await fetchItems(req, locale));

  return {
    query: query ? query : null,
    items: items ? items : util.find(locale, type, key, 0, 50, null, method === 'reverse' && true),
    sort: key,
    type: type,
    max: util?.max().all?.[key] ? util?.max().all?.[key] : 0,
    genres: await fetchWithCache(`${baseUrl(req)}/api/filmlist/genres`, 60 * 24),
    languages: await fetchWithCache(`${baseUrl(req)}/api/filmlist/languages`, 60 * 24),
    locale,
  };
};
