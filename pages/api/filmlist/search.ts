import { NextApiRequest, NextApiResponse } from 'next';

import { matchSorter } from 'match-sorter';
import { sort } from '@utils/tools/movies';

const search = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    let { s, q, l } = _.query;
    const items = sort(s.toString());
    let bin = items;

    if (l) {
      bin = bin.filter((v, i) => {
        const f = parseInt(l.toString());

        if (f < i) return false;
        return true;
      });
    }

    if (q) {
      bin = matchSorter(bin, q.toString(), { keys: ['name', 'original_name'] });
    }

    res.status(200).json(bin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default search;
