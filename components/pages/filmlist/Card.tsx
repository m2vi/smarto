import { CardProps } from '@Types/movielist';
import { genres } from '@utils/tools/movies';
import Image from 'next/image';
import { IoVideocamOutline } from 'react-icons/io5';
import { Wrapper } from './styles';

const Card = ({ genre_ids, poster_path, name, id, type, watched, favoured }: CardProps) => {
  return (
    <div className="flex flex-col" style={{ width: '200px' }}>
      <Wrapper>
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            height="302px"
            width="200px"
            alt={`${id} poster`}
            className="no-drag select-none w-full"
          />
        ) : (
          <div className="h-full w-full grid place-items-center">
            <IoVideocamOutline className="h-5 w-5" />
          </div>
        )}
      </Wrapper>
      <p className="font-normal text-lg">{name}</p>
      <p className="font-normal text-base text-primary-300">{genres(genre_ids, type)}</p>
    </div>
  );
};

export default Card;
