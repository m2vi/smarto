import { NextApiRequest, NextApiResponse } from 'next';

import { CardProps } from '@Types/filmlist';
import { ExternalId } from 'moviedb-promise/dist/request-types';
import { MovieDb } from 'moviedb-promise';
import { getReleaseDate } from '@utils/films/utils';
import util from '@utils/films/main';

export const insert = async (_: NextApiRequest, res: NextApiResponse) => {
  const { id, favoured, watched, type } = _.query;

  const db = new MovieDb(process.env.MOVIE_TOKEN);
  const data = await db.movieInfo({ id: id.toString() });

  res.json({
    favoured: favoured ? true : false,
    genre_ids: data.genres.map(g => g.id),
    id: data.id,
    name: data.title,
    original_language: data.original_language,
    original_name: data.original_title,
    poster_path: data.poster_path,
    release_date: getReleaseDate(data.release_date).getTime(),
    type: 'film',
    url: `https://www.themoviedb.org/movie/${data.id}`,
    watched: watched ? true : false,
  } as CardProps);
};

export default insert;
