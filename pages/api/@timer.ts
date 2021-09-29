import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';
import withProtection from '@utils/db/protection';

export const timer = async (_: NextApiRequest, res: NextApiResponse) => {
  const { access } = await withProtection(_, res);
  if (!access) return;

  await mongoose.connect(process.env.MONGO_URI, {
    autoIndex: true,
  });
  const db = mongoose.connection;

  const doc = await db.collection('timer').findOne({});

  res.status(200).json(doc.items);
};

export default timer;
