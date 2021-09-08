import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import aes from '@utils/security/aes';

const create = async (_: NextApiRequest, res: NextApiResponse) => {
  const token = aes.decrypt(_.headers?.token?.toString());

  if (process.env.KEY === token) {
    res.status(200).json(jwt.sign(token, process.env.JWT_SECRET));
  } else {
    res.status(401).json({ error: 'Token does not match' });
  }
};

export default create;
