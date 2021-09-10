import withProtection from '@utils/db/protection';
import { FilmlistUtil, fetchItems } from '@utils/films/main';
import { NextApiRequest, NextApiResponse } from 'next';

const items = async (_: NextApiRequest, res: NextApiResponse) => {
  const { access, token } = await withProtection(_, res);
  if (!access) return;

  const { type, key, start, offset, query, locale } = _.query as any;
  const util = new FilmlistUtil(await fetchItems(token, _, locale));
  const data = util.find(locale, type, key, parseInt(start), parseInt(offset), query);

  res.status(200).json(data);
};

export default items;
