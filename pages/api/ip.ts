import { NextApiRequest, NextApiResponse } from 'next';
import requestIp from 'request-ip';

const ip = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json({ ip: requestIp.getClientIp(_) });
  } catch (error) {}
};

export default ip;
