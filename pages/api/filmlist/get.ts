import { NextApiRequest, NextApiResponse } from 'next';

import main from '@utils/films/main';

export const insert = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id, type, favoured, watched } = _.query;

    const data = await main.get(
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
