import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

export const timer = async (_: NextApiRequest, res: NextApiResponse) => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;

  const doc = await db.collection('timer').findOne({});

  res.status(200).json(doc.items);
};

export default timer;
