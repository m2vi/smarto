import { FilmlistUtil, fetchItems } from '@utils/films/main';
import { NextApiRequest, NextApiResponse } from 'next';

export const refresh = async (_: NextApiRequest, res: NextApiResponse) => {
  const util = new FilmlistUtil(await fetchItems(_));
  let bin = [];
  let e = [];

  for (let item of util.items) {
    try {
      const data = await util.get(item.id_db, item.type, item.favoured, item.watched);

      !item?.static?.includes('poster_path') && (item.poster_path = data.poster_path);
      !item?.static?.includes('release_data') && (item.release_date = data.release_date);

      bin.push(item);
    } catch (error) {
      bin.push(item);
      e.push(item);
    }

    console.log(`${util.items.findIndex(i => i === item)}/${util.items.length}`);
  }

  res.status(200).json(bin);
};

export default refresh;
