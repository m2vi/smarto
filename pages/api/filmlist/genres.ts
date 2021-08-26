import { NextApiRequest, NextApiResponse } from 'next';

import { FilmListItems } from '@config/filmlist';

const films = async (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    action: FilmListItems.filter(v => v.genre_ids.includes(28)),
    'action & adventure': FilmListItems.filter(v => v.genre_ids.includes(10759)),
    adventure: FilmListItems.filter(v => v.genre_ids.includes(12)),
    animation: FilmListItems.filter(v => v.genre_ids.includes(16)),
    comedy: FilmListItems.filter(v => v.genre_ids.includes(35)),
    crime: FilmListItems.filter(v => v.genre_ids.includes(80)),
    documentary: FilmListItems.filter(v => v.genre_ids.includes(99)),
    drama: FilmListItems.filter(v => v.genre_ids.includes(18)),
    family: FilmListItems.filter(v => v.genre_ids.includes(10751)),
    fantasy: FilmListItems.filter(v => v.genre_ids.includes(14)),
    history: FilmListItems.filter(v => v.genre_ids.includes(36)),
    horror: FilmListItems.filter(v => v.genre_ids.includes(27)),
    kids: FilmListItems.filter(v => v.genre_ids.includes(10762)),
    music: FilmListItems.filter(v => v.genre_ids.includes(10402)),
    mystery: FilmListItems.filter(v => v.genre_ids.includes(9648)),
    news: FilmListItems.filter(v => v.genre_ids.includes(10763)),
    reality: FilmListItems.filter(v => v.genre_ids.includes(10764)),
    romance: FilmListItems.filter(v => v.genre_ids.includes(10749)),
    'sci-fi & fantasy': FilmListItems.filter(v => v.genre_ids.includes(10765)),
    'science fiction': FilmListItems.filter(v => v.genre_ids.includes(878)),
    soap: FilmListItems.filter(v => v.genre_ids.includes(10766)),
    talk: FilmListItems.filter(v => v.genre_ids.includes(10767)),
    thriller: FilmListItems.filter(v => v.genre_ids.includes(53)),
    'tv movie': FilmListItems.filter(v => v.genre_ids.includes(10770)),
    war: FilmListItems.filter(v => v.genre_ids.includes(10752)),
    'war & politics': FilmListItems.filter(v => v.genre_ids.includes(10768)),
    western: FilmListItems.filter(v => v.genre_ids.includes(37)),
  });
};

export default films;
