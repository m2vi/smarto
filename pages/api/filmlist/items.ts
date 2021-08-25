import { NextApiRequest, NextApiResponse } from 'next';

import { FilmListItems } from '@config/filmlist';
import { matchSorter } from 'match-sorter';
import { sort } from '@utils/tools/films';

export const items = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const { q, sort: sortType, action } = _.query;

    if (action && action.toString() === 'watched') {
      const items = FilmListItems.filter(item => item.watched === true);

      return res.status(200).json({ success: true, length: items.length });
    } else if (q && sortType) {
      const toCheck = sort(sortType.toString(), FilmListItems);
      const found = matchSorter(toCheck, q.toString(), { keys: ['name', 'original_name'] });

      return res.status(200).json({ success: true, data: found });
    } else if (sortType && !q) {
      const items = sort(sortType.toString(), FilmListItems);

      return res.status(200).json({ success: true, data: items });
    }

    return res.status(200).json(FilmListItems);
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

export default items;
