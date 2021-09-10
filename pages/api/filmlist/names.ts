import { NextApiRequest, NextApiResponse } from 'next';

import { MovieDb } from 'moviedb-promise';
import withProtection from '@utils/db/protection';

export const insert = async (_: NextApiRequest, res: NextApiResponse) => {
  const { access } = await withProtection(_, res);
  if (!access) return;

  const { id, type } = _.query;

  const db = new MovieDb(process.env.MOVIE_TOKEN);
  let bin = ['de-DE', 'en-UK', 'it'];

  const stuff = await Promise.all(
    bin.map(async language => {
      return type?.toString() === 'film'
        ? (await db.movieInfo({ id: id?.toString(), language })).title
        : (await db.tvInfo({ id: id?.toString(), language })).name;
    }),
  );

  res.json({
    de: stuff[0],
    en: stuff[1],
    it: stuff[2],
  });
};

export default insert;
