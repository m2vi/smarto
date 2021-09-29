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
