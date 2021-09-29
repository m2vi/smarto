import { basicFetch } from '@utils/db/fetch';
import { NextApiRequest, NextApiResponse } from 'next';

const filmlist = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await basicFetch(`https://filmlist.m2vi.me/api/filmlist/info`);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default filmlist;
