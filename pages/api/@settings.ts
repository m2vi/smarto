import { NextApiRequest, NextApiResponse } from 'next';

import mongoose from 'mongoose';
import withProtection from '@utils/db/protection';

export const me = async (_: NextApiRequest, res: NextApiResponse) => {
  const { access } = withProtection(_, res);
  if (!access) return;

  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;

  const doc = await db.collection('settings').findOne({});

  res.status(200).json(doc.data);
};

export default me;
