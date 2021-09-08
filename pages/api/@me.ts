import { NextApiRequest, NextApiResponse } from 'next';

import { AES } from '@utils/security/aes';
import mongoose from 'mongoose';

export const me = async (_: NextApiRequest, res: NextApiResponse) => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;

  const docs = await db.collection('me').findOne({});

  res.status(200).json(Object.keys(docs));
};

export default me;
