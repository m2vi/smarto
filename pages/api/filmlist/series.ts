import { NextApiRequest, NextApiResponse } from 'next';

import { MovieDb } from 'moviedb-promise';
import { refactorSeries } from '@utils/tools/movies';

const series = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = new MovieDb(process.env.MOVIE_TOKEN);
    const series = await db.searchTv({ query: _.query.q.toString() });
    let bin = [];

    series.results.forEach(series => {
      bin.push(refactorSeries(series));
    });

    res.status(200).json(bin);
  } catch (error) {
    res.status(400).json({ message: 'Failed' });
  }
};

export default series;
