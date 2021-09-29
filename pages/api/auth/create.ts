import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { basicFetch } from '@utils/db/fetch';
import { baseUrl } from '@utils/tools/utils';
import request_ip from 'request-ip';

const create = async (_: NextApiRequest, res: NextApiResponse) => {
  const token = _.headers?.token?.toString();

  if (!_.headers.referer) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (process.env.KEY === token) {
    const data = await basicFetch(`${baseUrl(_)}/api/ip?custom=${request_ip.getClientIp(_)}`);

    if (data?.valid) {
      res.status(200).json({ token: jwt.sign(token, process.env.JWT_SECRET) });
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

export default create;
