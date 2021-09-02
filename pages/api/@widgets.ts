import { NextApiRequest, NextApiResponse } from 'next';

import { WidgetItems } from '@config/widgets';

export const widgets = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(WidgetItems);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export default widgets;
