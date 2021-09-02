import { NextApiRequest, NextApiResponse } from 'next';

import { SearchItems } from '@config/search';

export const search = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(SearchItems);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export default search;
