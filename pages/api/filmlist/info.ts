import { NextApiRequest, NextApiResponse } from 'next';

import util from '@utils/films/main';

export const info = async (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json((await util.max()).all);
};

export default info;
