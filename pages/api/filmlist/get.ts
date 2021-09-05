import { FilmlistUtil, fetchItems } from '@utils/films/main';
import { NextApiRequest, NextApiResponse } from 'next';

export const insert = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id, type, favoured, watched } = _.query;
    const util = new FilmlistUtil(await fetchItems(_));
    const data = await util.get(
      id.toString(),
      type.toString(),
      favoured.toString() === 'true' ? true : false,
      watched.toString() === 'false' ? false : true,
    );
    res.status(200).json(data);
  } catch (error) {
    res.json(error.message);
  }
};

export default insert;
