import { FilmlistUtil, fetchItems } from '@utils/films/main';
import { NextApiRequest, NextApiResponse } from 'next';

import filmlistSchema from '@models/filmlistSchema';
import mongoose from 'mongoose';

const insert = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const util = new FilmlistUtil(await fetchItems(_));
    const obj = new filmlistSchema();
    await obj.save();

    const { id, type, favoured, watched } = _.query;

    const data = await util.get(
      id.toString(),
      type.toString(),
      favoured.toString() === 'true' ? true : false,
      watched.toString() === 'false' ? false : true,
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json(error.message);
  }
};

export default insert;
