import { CardProps, MoviePageProps } from '@Types/filmlist';
import { genres, getReleaseDate } from '@utils/tools/movies';
import moment from 'moment';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { IoVideocamOutline } from 'react-icons/io5';
import { Wrapper } from './styles';

interface CardCardProps extends MoviePageProps, CardProps {}

const Card = ({ genre_ids, poster_path, name, id, type, watched, favoured, childish, sort, release_date }: CardCardProps) => {
  const { t } = useTranslation();
  const genreList = genres(genre_ids, type);
  const release = moment(release_date).format(t('pages.filmlist.items.format'));

  return (
    <div className="flex flex-col" style={{ width: '200px' }}>
      <Wrapper className="h-full w-full grid place-items-center">
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            height="302px"
            width="200px"
            alt={`${id} poster`}
            className="no-drag select-none w-full"
          />
        ) : (
          <IoVideocamOutline className="h-5 w-5" />
        )}
      </Wrapper>
      <p className="font-normal text-lg overflow-hidden overflow-ellipsis whitespace-nowrap" title={name}>
        {name}
      </p>
      <p className="font-normal text-base text-primary-300 overflow-hidden overflow-ellipsis whitespace-nowrap" title={genreList}>
        {genreList}
      </p>
      <p className="font-normal text-base text-primary-300 overflow-hidden overflow-ellipsis whitespace-nowrap" title={release}>
        {t('pages.filmlist.items.released')} {release}
      </p>
    </div>
  );
};

export default Card;
