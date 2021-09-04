import { NextApiRequest, NextApiResponse } from 'next';

import filmlistSchema from '@models/filmlistSchema';
import main from '@utils/films/main';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const insert = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const obj = new filmlistSchema();
    await obj.save();

    const { id, type, favoured, watched } = _.query;

    const data = await main.get(
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
