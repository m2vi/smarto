import { NextApiRequest, NextApiResponse } from 'next';

import { FilmListItems } from '@config/filmlist';
import util from '@utils/films/main';

const genres = async (_: NextApiRequest, res: NextApiResponse) => {
  const allGenres = [];
  FilmListItems.forEach(v => {
    v.genre_ids.forEach(v => allGenres.push(v));
  });

  const counts = {} as any;
  allGenres.forEach(x => {
    counts[x] = (counts[x] || 0) + 1;
  });

  res.json(
    Object.entries(counts).map(a => {
      const id = a[0];
      const count = a[1];
      const name = util.genre.getNames([parseInt(id)])[0];

      return { id, count, name };
    }),
  );
};

export default genres;
