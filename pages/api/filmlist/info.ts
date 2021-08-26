import { FilmListItems, StreamingServices } from '@config/filmlist';
import { NextApiRequest, NextApiResponse } from 'next';

export const items = async (_: NextApiRequest, res: NextApiResponse) => {
  const info = {
    all: FilmListItems.length,
    favoured: FilmListItems.filter(v => v.favoured).length,
    unwatched: FilmListItems.filter(v => !v.watched).length,
    watched: FilmListItems.filter(v => v.watched).length,
    childish: FilmListItems.filter(v => v.childish).length,
    films: FilmListItems.filter(v => v.type === 'film').length,
    series: FilmListItems.filter(v => v.type === 'series').length,
    streaming: StreamingServices.length,
  };

  res.status(200).json(info);
};

export default items;
