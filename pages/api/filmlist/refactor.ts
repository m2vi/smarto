import { NextApiRequest, NextApiResponse } from 'next';

import { FilmListItems } from '@config/filmlist';

const getId = async (_: NextApiRequest, res: NextApiResponse) => {
  const newStuff = FilmListItems.map(item => {
    item.url = `https://www.themoviedb.org/${item.type === 'film' ? 'movie' : 'tv'}/${item.id}`;
    return item;
  });

  res.json(newStuff);
};

export default getId;
