import { useTranslation } from 'next-i18next';
import { useState, CSSProperties } from 'react';
import ReactPlayer from 'react-player/lazy';
import { MainProps } from './Page';

export const Player = ({ info }: MainProps) => {
  const { t } = useTranslation();
  const [enabled, setEnabled] = useState(false);

  const { video_url, thumbnails } = info;
  const thumbnail = thumbnails[thumbnails.length - 1].url;
  const thumbnailCSS: CSSProperties = {
    background: `center / contain no-repeat url("${thumbnail}")`,
  };

  const style: CSSProperties = {
    aspectRatio: '16 / 9',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  return (
    <div
      className='preview bg-primary-800 h-full w-full flex items-center justify-center rounded-8 aspect-default'
      style={thumbnailCSS}
    >
      {enabled ? (
        <ReactPlayer
          url={video_url}
          style={style}
          controls={true}
          width='100%'
          height='100%'
          playing={true}
        />
      ) : (
        <div
          className='h-full w-full aspect-default bg-player cursor-pointer flex justify-center items-center text-center select-none'
          onClick={() => setEnabled(true)}
        >
          <p>{t('actions.loadEmbed')}</p>
        </div>
      )}
    </div>
  );
};

export default Player;
