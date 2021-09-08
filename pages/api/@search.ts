import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

export const search = async (_: NextApiRequest, res: NextApiResponse) => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;

  const doc = await db.collection('search').findOne({});

  res.status(200).json(doc.items);
};

export default search;
