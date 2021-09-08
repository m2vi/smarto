import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

export const widgets = async (_: NextApiRequest, res: NextApiResponse) => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;

  const doc = await db.collection('settings').findOne({});

  res.status(200).json(doc.data.markedWidgets);
};

export default widgets;
