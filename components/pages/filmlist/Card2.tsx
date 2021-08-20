import Image from 'next/image';
import { IoVideocamOutline } from 'react-icons/io5';
import { StreamingServiceProps } from '@Types/filmlist';
import { Wrapper } from './styles';
import { useTranslation } from 'react-i18next';

const Card = ({ href, id, languages, name, original_name, poster_path, types }: StreamingServiceProps) => {
  const { t } = useTranslation();
  const handleClick = () => window.open(href, '_blank');

  const newLanguages = languages.map(l => t(`pages.filmlist.streaming.languages.${l}`)).join(', ');
  const newTypes = types.map(type => t(`pages.filmlist.streaming.type.${type}`)).join(', ');

  return (
    <div className="flex flex-col cursor-pointer" style={{ width: '200px' }} onClick={handleClick}>
      <Wrapper className="h-full w-full grid place-items-center">
        {poster_path ? (
          <Image src={poster_path} height="313px" width="200px" alt={`${id} poster`} className="no-drag select-none w-full" quality={100} />
        ) : (
          <IoVideocamOutline className="h-5 w-5" />
        )}
      </Wrapper>
      <p className="font-normal text-lg overflow-hidden overflow-ellipsis whitespace-nowrap" title={original_name}>
        {name}
      </p>
      <p className="font-normal text-base text-primary-300 overflow-hidden overflow-ellipsis whitespace-nowrap" title={newLanguages}>
        {t('pages.filmlist.streaming.languages.default')}: {newLanguages}
      </p>
      <p className="font-normal text-base text-primary-300 overflow-hidden overflow-ellipsis whitespace-nowrap" title={newTypes}>
        {t('pages.filmlist.streaming.type.default')}: {newTypes}
      </p>
    </div>
  );
};

export default Card;
