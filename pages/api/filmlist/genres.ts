import { FilmlistUtil, fetchItems } from '@utils/films/main';
import { sortByKey } from '@utils/tools/array';
import { NextApiRequest, NextApiResponse } from 'next';

const genres = async (_: NextApiRequest, res: NextApiResponse) => {
  const util = new FilmlistUtil(await fetchItems(_, 'en'));

  const allGenres = [];

  util.items.forEach(v => {
    v.genre_ids.forEach(v => allGenres.push(v));
  });

  const counts = {} as any;
  allGenres.forEach(x => {
    counts[x] = (counts[x] || 0) + 1;
  });

  const items = Object.entries(counts).map(a => {
    const id = a[0];
    const count = a[1];
    const name = util.genre.getNames([parseInt(id)])[0];

    return { id, count, name };
  });

  res.status(200).json(sortByKey(items, 'name'));
};

export default genres;
