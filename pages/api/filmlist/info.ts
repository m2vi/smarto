import { NextApiRequest, NextApiResponse } from 'next';

import { FilmListItems } from '@config/filmlist';

export const items = async (_: NextApiRequest, res: NextApiResponse) => {
  const info = {
    all: FilmListItems.length,
    favourites: FilmListItems.filter(v => v.favoured).length,
    unwatched: FilmListItems.filter(v => !v.watched).length,
    watched: FilmListItems.filter(v => v.watched).length,
    kids: FilmListItems.filter(i => i.genre_ids.includes(10762) || i.genre_ids.includes(10751)).length,
    films: FilmListItems.filter(v => v.type === 'film').length,
    series: FilmListItems.filter(v => v.type === 'series').length,
    genres: {
      action: FilmListItems.filter(v => v.genre_ids.includes(28)).length,
      'action & adventure': FilmListItems.filter(v => v.genre_ids.includes(10759)).length,
      adventure: FilmListItems.filter(v => v.genre_ids.includes(12)).length,
      animation: FilmListItems.filter(v => v.genre_ids.includes(16)).length,
      comedy: FilmListItems.filter(v => v.genre_ids.includes(35)).length,
      crime: FilmListItems.filter(v => v.genre_ids.includes(80)).length,
      documentary: FilmListItems.filter(v => v.genre_ids.includes(99)).length,
      drama: FilmListItems.filter(v => v.genre_ids.includes(18)).length,
      family: FilmListItems.filter(v => v.genre_ids.includes(10751)).length,
      fantasy: FilmListItems.filter(v => v.genre_ids.includes(14)).length,
      history: FilmListItems.filter(v => v.genre_ids.includes(36)).length,
      horror: FilmListItems.filter(v => v.genre_ids.includes(27)).length,
      kids: FilmListItems.filter(v => v.genre_ids.includes(10762)).length,
      music: FilmListItems.filter(v => v.genre_ids.includes(10402)).length,
      mystery: FilmListItems.filter(v => v.genre_ids.includes(9648)).length,
      news: FilmListItems.filter(v => v.genre_ids.includes(10763)).length,
      reality: FilmListItems.filter(v => v.genre_ids.includes(10764)).length,
      romance: FilmListItems.filter(v => v.genre_ids.includes(10749)).length,
      'sci-fi & fantasy': FilmListItems.filter(v => v.genre_ids.includes(10765)).length,
      'science fiction': FilmListItems.filter(v => v.genre_ids.includes(878)).length,
      soap: FilmListItems.filter(v => v.genre_ids.includes(10766)).length,
      talk: FilmListItems.filter(v => v.genre_ids.includes(10767)).length,
      thriller: FilmListItems.filter(v => v.genre_ids.includes(53)).length,
      'tv movie': FilmListItems.filter(v => v.genre_ids.includes(10770)).length,
      war: FilmListItems.filter(v => v.genre_ids.includes(10752)).length,
      'war & politics': FilmListItems.filter(v => v.genre_ids.includes(10768)).length,
      western: FilmListItems.filter(v => v.genre_ids.includes(37)).length,
    },
  };

  res.status(200).json(info);
};

export default items;
