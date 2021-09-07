import { NextApiRequest, NextApiResponse } from 'next';
import cache from 'memory-cache';

export const me = async (_: NextApiRequest, res: NextApiResponse) => {
  cache.clear();

  res.status(200).json({ message: 'Cleared' });
};

export default me;
