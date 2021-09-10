import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import auth from '@utils/security/auth';

export const withProtection = async (_: NextApiRequest, res: NextApiResponse) => {
  const token = await auth.getToken(_);

  try {
    if (token === process.env.KEY) {
      return {
        access: true,
      };
    } else {
      res.status(401).json({ error: 'Unauthorized' });
      res.end();
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }

  return {
    access: false,
    token: token?.toString(),
  };
};

export const hasAccess = (jsonwebtoken: string) => {
  const token = jwt.decode(jsonwebtoken);

  return {
    access: token === process.env.KEY,
  };
};

export default withProtection;

export const restricted = async (_: NextApiRequest, res: NextApiResponse) => {
  const token = _.query?.token?.toString();

  if (token === process.env.API_TOKEN) {
    return {
      access: true,
    };
  }

  res.status(200).json({ error: 'Restricted Route' });

  return {
    access: false,
  };
};
