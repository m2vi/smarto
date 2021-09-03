import { NextApiRequest, NextApiResponse } from 'next';

import { MovieDb } from 'moviedb-promise';

export const insert = async (_: NextApiRequest, res: NextApiResponse) => {
  const { id, type } = _.query;

  const db = new MovieDb(process.env.MOVIE_TOKEN);
  let bin = ['de-DE', 'en', 'it'];

  const stuff = await Promise.all(
    bin.map(async language => {
      return type?.toString() === 'film'
        ? (await db.movieInfo({ id: id?.toString(), language })).title
        : (await db.tvInfo({ id: id?.toString(), language })).name;
    }),
  );

  res.json(stuff);
};

export default insert;
