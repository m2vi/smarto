import { FilmlistUtil, fetchItems } from '@utils/films/main';
import { NextApiRequest, NextApiResponse } from 'next';

const languages = async (_: NextApiRequest, res: NextApiResponse) => {
  const util = new FilmlistUtil(await fetchItems(_));
  const allLanguages = util.items.map(({ original_language }) => original_language);
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
