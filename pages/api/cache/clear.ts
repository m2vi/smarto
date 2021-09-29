import { NextApiRequest, NextApiResponse } from 'next';
import cache from 'memory-cache';

export const me = async (_: NextApiRequest, res: NextApiResponse) => {
  cache.clear();

  res.status(204).json({ message: 'cleared' });
};

export default me;
