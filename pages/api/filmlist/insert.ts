import { FilmlistUtil, fetchItems } from '@utils/films/main';
import { NextApiRequest, NextApiResponse } from 'next';
import { CardProps } from '@Types/filmlist';
import filmlistSchema from '@models/filmlistSchema';
import mongoose from 'mongoose';
import { restricted } from '@utils/db/protection';

const insert = async (_: NextApiRequest, res: NextApiResponse) => {
  const { access } = await restricted(_, res);
  if (!access) return;

  try {
    const { id, type, favoured, watched } = _.query;
    const util = new FilmlistUtil([]);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    const data = await util.get(
      id.toString(),
      type.toString(),
      favoured.toString() === 'true' ? true : false,
      watched.toString() === 'false' ? false : true,
    );

    const allItems = (await fetchItems(process.env.API_TOKEN, _, 'en', true)) as CardProps[];

    if ((allItems as any).error) return res.status(401).json({ error: 'req failed', allItems });

    const exists = allItems.find(item => item.id_db === parseInt(id.toString())) ? true : false;

    if (!exists) {
      const obj = new filmlistSchema(data);
      await obj.save();
      res.status(200).json(await filmlistSchema.find(data));
    } else {
      res.status(400).json({ message: 'Item already exists' });
    }
  } catch (error) {
    res.status(200).json(error.message);
  }
};

export default insert;
