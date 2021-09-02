import { NextApiRequest, NextApiResponse } from 'next';

import user from '@config/me';

export const me = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export default me;
