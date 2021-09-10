import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const create = async (_: NextApiRequest, res: NextApiResponse) => {
  const token = _.headers?.token?.toString();

  if (process.env.KEY === token) {
    res.status(200).json({ token: jwt.sign(token, process.env.JWT_SECRET) });
  } else {
    res.status(200).json({ error: 'Token does not match' });
  }
};

export default create;
