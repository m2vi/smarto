import { NextApiRequest, NextApiResponse } from 'next';

import { FilmListItems } from '@config/filmlist';
import { removeDuplicates } from '@utils/tools/array';

const languages = async (_: NextApiRequest, res: NextApiResponse) => {
  const allLanguages = FilmListItems.map(({ original_language }) => original_language);

  res.status(200).json(removeDuplicates(allLanguages));
};

export default languages;
