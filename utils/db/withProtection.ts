import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export const withProtection = async (_: NextApiRequest, res: NextApiResponse, callback: (_: NextApiRequest, res: NextApiResponse) => any) => {
  try {
    const token = jwt.decode(_.headers.authorization);

    if (token === process.env.KEY) {
      await callback(_, res);
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export default withProtection;
