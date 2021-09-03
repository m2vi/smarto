import { NextApiRequest, NextApiResponse } from 'next';

import { FilmListItems } from '@config/filmlist';
import main from '@utils/films/main';

export const refresh = async (_: NextApiRequest, res: NextApiResponse) => {
  let bin = [];
  let e = [];

  for (let item of FilmListItems) {
    try {
      const data = await main.get(item.id, item.type, item.favoured, item.watched);

      item.poster_path = data.poster_path;
      item.release_date = data.release_date;

      bin.push(item);
    } catch (error) {
      bin.push(item);
      e.push(item);
    }

    console.log(`${FilmListItems.findIndex(i => i === item)}/${FilmListItems.length}`);
  }

  res.status(200).json(bin);
};

export default refresh;
