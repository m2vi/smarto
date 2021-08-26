import { NextApiRequest, NextApiResponse } from 'next';

import { MovieDb } from 'moviedb-promise';
import { refactorMovie } from '@utils/tools/films';

const films = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = new MovieDb(process.env.MOVIE_TOKEN);
    const s = await db.genreMovieList({ language: 'de' });

    res.status(200).json(s);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default films;
