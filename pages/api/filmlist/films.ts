import { NextApiRequest, NextApiResponse } from 'next';
import { MovieDb } from 'moviedb-promise';
import { getReleaseDate, refactorMovie } from '@utils/tools/movies';
import { FilmListItems } from '@config/filmlist';

const films = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = new MovieDb(process.env.MOVIE_TOKEN);
    // const films = await db.searchMovie({ query: _.query.q.toString() });
    // let bin = [];

    // films.results.forEach(film => {
    //   bin.push(refactorMovie(film));
    // });

    res.status(200).json(await db.genreTvList({ language: 'de-DE' }));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default films;
