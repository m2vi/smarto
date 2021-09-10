import withProtection from '@utils/db/protection';
import { NextApiRequest, NextApiResponse } from 'next';

const lookup = async (_: NextApiRequest, res: NextApiResponse) => {
  const { access } = await withProtection(_, res);
  if (!access) return;

  try {
    const { service, id } = _.query;

    const data = await fetch(`https://lookup.vercel.app/api/${service}/${id}`);
    const json = await data.json();
    res.status(200).json(json);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default lookup;
