import { NextApiRequest, NextApiResponse } from 'next';
import { getVideoDetails } from '../../../utils/youtube/youtube';
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { v } = req.query;
  const V = v ? v.toString() : '';

  const details = await getVideoDetails(V);

  res.status(200).json(JSON.stringify(details));
};
