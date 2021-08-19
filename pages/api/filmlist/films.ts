import { NextApiRequest, NextApiResponse } from 'next';

import { MovieDb } from 'moviedb-promise';
import { refactorMovie } from '@utils/tools/movies';

const films = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = new MovieDb(process.env.MOVIE_TOKEN);
    const films = await db.searchMovie({ query: _.query.q.toString() });
    let bin = [];

    films.results.forEach(film => {
      bin.push(refactorMovie(film));
    });

    res.status(200).json(bin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default films;
