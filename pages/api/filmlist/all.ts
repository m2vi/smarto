import { NextApiRequest, NextApiResponse } from 'next';

import filmlistSchema from '@models/filmlistSchema';
import mongoose from 'mongoose';

const all = async (_: NextApiRequest, res: NextApiResponse) => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const docs = (await filmlistSchema.find()) as any;

  res.status(200).json(docs);
};

export default all;
