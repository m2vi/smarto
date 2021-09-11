import { fetchItems, FilmlistUtil } from '@utils/films/main';
import { baseUrl } from '@utils/tools/utils';
import { fetchWithCache } from './fetch';

export const fetchBasicProps = async (token, locale, req) => {
  const base = `${baseUrl(req)}/api`;

  const me = await fetchWithCache(`${base}/@me?token=${token}`, 60 * 24 * 3);
  const settings = await fetchWithCache(`${base}/@settings?token=${token}`, 60 * 24 * 3);

  return {
    me,
    settings,
    locale,
  };
};

export const fetchFilmlistProps = async (auth, req, locale, type, key, method = 'normal', query?, items?) => {
  const util = new FilmlistUtil(await fetchItems(auth, req, locale));

  return {
    query: query ? query : null,
    items: items ? items : util.find(locale, type, key, 0, 50, null, method === 'reverse' && true),
    sort: key,
    type: type,
    max: util?.max().all?.[key] ? util?.max().all?.[key] : 0,
    genres: await fetchWithCache(`${baseUrl(req)}/api/filmlist/genres?token=${auth}`, 60 * 24),
    languages: await fetchWithCache(`${baseUrl(req)}/api/filmlist/languages?token=${auth}`, 60 * 24),
    locale,
  };
};
