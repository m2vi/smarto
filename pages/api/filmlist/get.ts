import { NextApiRequest, NextApiResponse } from 'next';

import { CardProps } from '@Types/filmlist';
import { MovieDb } from 'moviedb-promise';
import { getReleaseDate } from '@utils/films/utils';

export const insert = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id, favoured, watched, type } = _.query;

    const db = new MovieDb(process.env.MOVIE_TOKEN);
    const data = (await db.movieInfo({ id: id.toString() })) as any;

    const names = async () => {
      let bin = ['de-DE', 'en-UK', 'it'];

      const stuff = await Promise.all(
        bin.map(async language => {
          return type?.toString() === 'film'
            ? (await db.movieInfo({ id: id?.toString(), language })).title
            : (await db.tvInfo({ id: id?.toString(), language })).name;
        }),
      );
      return {
        de: stuff[0],
        en: stuff[1],
        it: stuff[2],
      };
    };

    if (type.toString() === 'film') {
      res.json({
        favoured: favoured ? true : false,
        genre_ids: data?.genres.map(g => g.id),
        id: data?.id,
        name: await names(),
        original_language: data?.original_language,
        original_name: data?.original_title,
        poster_path: data?.poster_path,
        release_date: data?.release_date ? getReleaseDate(data?.release_date).getTime() : false,
        type: 'film',
        url: `https://www.themoviedb.org/movie/${data?.id}`,
        watched: watched?.toString() === 'false' ? false : true,
      } as CardProps);
    } else {
      res.json({
        favoured: favoured ? true : false,
        genre_ids: data?.genres.map(g => g.id),
        id: data?.id,
        name: await names(),
        original_language: data?.original_language,
        original_name: data?.original_name,
        poster_path: data?.poster_path,
        release_date: data?.first_air_date ? getReleaseDate(data?.first_air_date).getTime() : false,
        type: 'film',
        url: `https://www.themoviedb.org/movie/${data?.id}`,
        watched: watched?.toString() === 'false' ? false : true,
      } as CardProps);
    }
  } catch (error) {
    res.json(error.message);
  }
};

export default insert;
