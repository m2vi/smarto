import { FilmlistUtil, fetchItems } from '@utils/films/main';
import { NextApiRequest, NextApiResponse } from 'next';

export const info = async (_: NextApiRequest, res: NextApiResponse) => {
  const util = new FilmlistUtil(await fetchItems(process.env.API_TOKEN, _, 'en'));
  res.status(200).json(util.max().all);
};

export default info;
