import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { basicFetch } from '@utils/db/fetch';
import { baseUrl } from '@utils/tools/utils';
import request_ip from 'request-ip';

const create = async (_: NextApiRequest, res: NextApiResponse) => {
  const token = _.headers?.token?.toString();

  if (process.env.KEY === token) {
    const data = await basicFetch(`${baseUrl(_)}/api/ip?custom=${request_ip.getClientIp(_)}`);

    if (data?.valid) {
      res.status(200).json({ token: jwt.sign(token, process.env.JWT_SECRET) });
    } else {
      res.status(200).json({ error: 'Wrong access point' });
    }
  } else {
    res.status(200).json({ error: 'Wrong password' });
  }
};

export default create;
