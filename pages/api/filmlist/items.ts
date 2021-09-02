import { NextApiRequest, NextApiResponse } from 'next';

import util from '@utils/films/main';

const items = async (_: NextApiRequest, res: NextApiResponse) => {
  const { type, key, start, offset, query } = _.query as any;
  const data = util.find(type, key, parseInt(start), parseInt(offset), query);

  res.status(200).json(data);
};

export default items;
