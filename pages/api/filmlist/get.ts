import withProtection from '@utils/db/protection';
import { FilmlistUtil, fetchItems } from '@utils/films/main';
import { NextApiRequest, NextApiResponse } from 'next';

export const insert = async (_: NextApiRequest, res: NextApiResponse) => {
  const { access } = withProtection(_, res);
  if (!access) return;

  try {
    const { id, type, favoured, watched, locale } = _.query;
    const util = new FilmlistUtil(await fetchItems(_, locale.toString()));
    const data = await util.get(
      id.toString(),
      type.toString(),
      favoured.toString() === 'true' ? true : false,
      watched.toString() === 'false' ? false : true,
    );
    res.status(200).json(data);
  } catch (error) {
    res.json(error.message);
  }
};

export default insert;
