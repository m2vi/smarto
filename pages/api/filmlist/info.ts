import withProtection from '@utils/db/protection';
import { FilmlistUtil, fetchItems } from '@utils/films/main';
import { NextApiRequest, NextApiResponse } from 'next';

export const info = async (_: NextApiRequest, res: NextApiResponse) => {
  const { access, token } = await withProtection(_, res);
  if (!access) return;

  const util = new FilmlistUtil(await fetchItems(token, _, 'en'));
  res.status(200).json(util.max().all);
};

export default info;
