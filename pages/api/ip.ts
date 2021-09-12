import { NextApiRequest, NextApiResponse } from 'next';
import requestIp from 'request-ip';
import ipp from 'ip';

const ip = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json({ ip: requestIp.getClientIp(_), ip2: ipp.address() });
  } catch (error) {}
};

export default ip;
