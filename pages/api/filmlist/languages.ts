import { NextApiRequest, NextApiResponse } from 'next';

import { FilmListItems } from '@config/filmlist';

const languages = async (_: NextApiRequest, res: NextApiResponse) => {
  const allLanguages = FilmListItems.map(({ original_language }) => original_language);
  const counts = {} as any;
  allLanguages.forEach(x => {
    counts[x] = (counts[x] || 0) + 1;
  });

  res.status(200).json(
    Object.entries(counts).map(([key, value]) => {
      return { id: key, count: value };
    }),
  );
};

export default languages;
