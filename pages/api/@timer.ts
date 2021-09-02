import { NextApiRequest, NextApiResponse } from 'next';

import { TimerItems } from '@config/timer';

export const timer = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(TimerItems);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export default timer;
