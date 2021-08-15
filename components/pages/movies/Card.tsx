import { CardProps } from '@Types/movielist';
import { genres } from '@utils/tools/movies';
import Image from 'next/image';
import { Wrapper } from './styles';

const Card = ({ genre_ids, poster_path, name, id, type, watched, favoured }: CardProps) => {
  return (
    <div className="flex flex-col" style={{ width: '200px' }}>
      <Wrapper>
        <Image src={`https://image.tmdb.org/t/p/original${poster_path}`} height="302px" width="200px" alt=" " className="no-drag select-none" />
      </Wrapper>
      <p className="font-normal text-lg">{name}</p>
      <p className="font-normal text-base text-primary-300">{genres(genre_ids, type)}</p>
    </div>
  );
};

export default Card;
