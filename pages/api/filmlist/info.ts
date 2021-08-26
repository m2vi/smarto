import { NextApiRequest, NextApiResponse } from 'next';

import { FilmListItems } from '@config/filmlist';

export const items = async (_: NextApiRequest, res: NextApiResponse) => {
  const info = {
    all: FilmListItems.length,
    favoured: FilmListItems.filter(v => v.favoured).length,
    unwatched: FilmListItems.filter(v => !v.watched).length,
    watched: FilmListItems.filter(v => v.watched).length,
    kids: FilmListItems.filter(i => i.genre_ids.includes(10762) || i.genre_ids.includes(10751)).length,
    films: FilmListItems.filter(v => v.type === 'film').length,
    series: FilmListItems.filter(v => v.type === 'series').length,
  };

  res.status(200).json(info);
};

export default items;
