import { CardProps, MoviePageProps } from '@Types/filmlist';
import { genres } from '@utils/tools/movies';
import Image from 'next/image';
import { IoVideocamOutline } from 'react-icons/io5';
import { Wrapper } from './styles';

interface CardCardProps extends MoviePageProps, CardProps {}

const Card = ({ genre_ids, poster_path, name, id, type, watched, favoured, childish, sort }: CardCardProps) => {
  if (childish && sort !== 'childish') return null;
  const genreList = genres(genre_ids, type);

  return (
    <div className="flex flex-col float-left m-2" style={{ width: '200px' }}>
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
      <p className="font-normal text-lg overflow-hidden overflow-ellipsis whitespace-nowrap" title={genreList}>
        {name}
      </p>
      <p className="font-normal text-base text-primary-300 overflow-hidden overflow-ellipsis whitespace-nowrap" title={genreList}>
        {genreList}
      </p>
    </div>
  );
};

export default Card;
