import { NextApiRequest, NextApiResponse } from 'next';
import { MovieDb } from 'moviedb-promise';

const films = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = new MovieDb(process.env.MOVIE_TOKEN);
    const films = await db.searchMovie({ query: _.query.q.toString() });

    let bin = [];

    films.results.forEach(film => {
      const { genre_ids, id, title: name, poster_path } = film;
      const curr = { favoured: false, genre_ids, id, name, poster_path, type: 'film', watched: true };
      bin.push(curr);
    });

    res.status(200).json(bin);
  } catch (error) {
    res.status(400).json({ message: 'Failed' });
  }
};

export default films;
