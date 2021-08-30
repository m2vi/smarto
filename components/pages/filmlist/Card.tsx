import { IoStar, IoVideocamOutline } from 'react-icons/io5';

import { CardProps } from '@Types/filmlist';
import Image from 'next/image';
import { Wrapper } from './styles';
import { genres } from '@utils/films/utils';
import moment from 'moment';
import { translation } from '@utils/validate/translation';
import { useTranslation } from 'react-i18next';

interface CardCardProps extends CardProps {}

const Card = ({ genre_ids, poster_path, name, id, release_date, original_name, url }: CardCardProps) => {
  return (
    <a href={url} className="flex flex-col" style={{ width: '200px' }}>
      <Wrapper className="h-full w-full grid place-items-center relative">
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            height="313px"
            width="200px"
            alt={`${id} poster`}
            className="no-drag select-none w-full overflow-hidden relative"
            objectFit={'cover'}
          />
        ) : (
          <IoVideocamOutline className="h-5 w-5" />
        )}
      </Wrapper>
      <p className="font-normal text-lg overflow-hidden overflow-ellipsis whitespace-nowrap" title={original_name}>
        {name}
      </p>
      <Genres ids={genre_ids} />
      <Release release_date={release_date} />
    </a>
  );
};

export default Card;

export const Genres = ({ ids }) => {
  const { t } = useTranslation();
  const g = genres
    .getNames(ids)
    .map(name => t(`pages.filmlist.categories.${name.toLowerCase()}`, { defaultValue: '...' }))
    .join(', ');
  translation.checkJoin('...', g, ', ');

  return (
    <p className="font-normal text-base text-primary-300 overflow-hidden overflow-ellipsis whitespace-nowrap" title={g}>
      {g}
    </p>
  );
};

export const Release = ({ release_date }) => {
  const { t } = useTranslation();
  const r = moment(release_date).format(t('pages.filmlist.items.format'));

  return (
    <p className="font-normal text-base text-primary-300 overflow-hidden overflow-ellipsis whitespace-nowrap" title={r}>
      {t('pages.filmlist.items.released')} {r}
    </p>
  );
};
