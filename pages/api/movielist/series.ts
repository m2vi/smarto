import { NextApiRequest, NextApiResponse } from 'next';
import { MovieDb } from 'moviedb-promise';

const series = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = new MovieDb(process.env.MOVIE_TOKEN);
    const series = await db.searchTv({ query: _.query.q.toString() });

    const { genre_ids, id, name, poster_path } = series.results[0];
    res.status(200).json({ favoured: false, genre_ids, id, name, poster_path, type: 'series', watched: true });
  } catch (error) {
    res.status(400).json({ message: 'Failed' });
  }
};

export default series;
