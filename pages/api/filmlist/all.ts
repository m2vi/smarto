import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

const all = async (_: NextApiRequest, res: NextApiResponse) => {
  let { locale } = _.query;

  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;

  const docs = await db.collection('filmlist').find().toArray();

  if (locale) {
    const mapped = docs.map(doc => {
      doc.poster_path[locale?.toString()] ? (doc.poster_path = doc.poster_path[locale.toString()]) : (doc.poster_path = doc.poster_path['en']);
      doc.name[locale?.toString()] ? (doc.name = doc.name[locale.toString()]) : (doc.name = doc.name['en']);
      return doc;
    });

    return res.status(200).json(mapped);
  }

  res.status(200).json(docs);
};

export default all;
