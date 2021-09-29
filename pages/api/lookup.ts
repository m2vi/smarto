import { basicFetch } from '@utils/db/fetch';
import { NextApiRequest, NextApiResponse } from 'next';

const lookup = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const { service, id } = _.query;

    const data = await basicFetch(`https://lookup.vercel.app/api/${service}/${id}`);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default lookup;
