import { NextApiRequest, NextApiResponse } from 'next';
import user, { widgets } from '@config/me';

export const items = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    let u = user as any;
    u.success = true;
    u.widgets = widgets;

    res.status(200).json(u);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export default items;
