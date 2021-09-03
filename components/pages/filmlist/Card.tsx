import { CardProps } from '@Types/filmlist';
import Image from 'next/image';
import { IoVideocamOutline } from 'react-icons/io5';
import { genres } from '@utils/films/utils';
import moment from 'moment';
import { translation } from '@utils/validate/translation';
import { useTranslation } from 'react-i18next';

interface CardCardProps extends CardProps {
  locale: string;
}

const Card = ({ genre_ids, id, locale, name, poster_path, release_date, url, original_name }: CardCardProps) => {
  const getName = (locale: string) => {
    return name[locale] ? name[locale] : name['en'] ? name['en'] : original_name;
  };

  return (
    <a href={url} className="flex flex-col w-200">
      <div className="h-full w-full grid place-items-center relative mb-2">
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${poster_path[locale]}`}
            height="300px"
            width="200px"
            alt={`${id} poster`}
            className="no-drag select-none w-full overflow-hidden relative"
            objectFit={'cover'}
          />
        ) : (
          <IoVideocamOutline className="h-5 w-5" />
        )}
      </div>
      <p className="font-normal text-lg overflow-hidden overflow-ellipsis whitespace-nowrap" title={getName(locale)}>
        {getName(locale)}
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
    .map(name => t(`pages.filmlist.genres.${name.toLowerCase()}`, { defaultValue: '...' }))
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
