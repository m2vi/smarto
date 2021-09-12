import { Client } from '@projects/lookup/client';
import { NextApiRequest, NextApiResponse } from 'next';
import requestIp from 'request-ip';

const ip = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const { custom } = _.query;

    const client = new Client('ip', _);
    const ip = custom ? custom?.toString() : requestIp.getClientIp(_);

    if (ip === '::1') {
      return res.status(200).json({ ip: 'local', valid: true });
    }

    const data = await client.get(ip);

    if (!data?.success) {
      return res.status(500).json({ ip: ip, valid: false });
    }

    if (data?.location?.country === process.env.IP) {
      return res.status(200).json({ ip: ip, valid: true });
    }

    res.status(401).json({ ip: process.env.IP, country: data?.location?.country, valid: false });
  } catch (error) {
    res.status(200).json({ ip: '-', valid: false, error: error.message });
  }
};

export default ip;
