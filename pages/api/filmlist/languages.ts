import withProtection from '@utils/db/protection';
import { FilmlistUtil, fetchItems } from '@utils/films/main';
import { sortByKey } from '@utils/tools/array';
import { NextApiRequest, NextApiResponse } from 'next';

const languages = async (_: NextApiRequest, res: NextApiResponse) => {
  const { access, token } = withProtection(_, res);
  if (!access) return;

  const util = new FilmlistUtil(await fetchItems(token, _, 'en'));
  const allLanguages = util.items.map(({ original_language }) => original_language);
  const counts = {} as any;
  allLanguages.forEach(x => {
    counts[x] = (counts[x] || 0) + 1;
  });

  const items = Object.entries(counts).map(([key, value]) => {
    return { id: key, count: value };
  });

  res.status(200).json(sortByKey(items, 'count').reverse());
};

export default languages;
