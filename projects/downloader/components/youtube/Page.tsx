import { Bar, BarButton } from './Bar';
import { IoSearch, IoInformationCircleOutline } from 'react-icons/io5';
import React, { useEffect, useState } from 'react';
import Tooltip from '../Tooltip';
import { useTranslation } from 'next-i18next';
import keyboardKey, { Play, t } from 'keyboard-key';
import { validateURL } from 'ytdl-core';
import { Button } from '../Button';
import { genDownloadLink, parsedProps } from '../../utils/youtube/youtube';
import Player from './Player';
import Modal from './Modal';
import { useModal } from '../../context/Modal';
import { getSupportedItags } from '../../utils/youtube/itags';

export const Page = () => {
  const { t } = useTranslation();
  const [info, setInfo] = useState(undefined);
  const barRef = React.createRef<HTMLInputElement>();

  const handleKeyUp = (e: React.KeyboardEvent) => {
    const code = keyboardKey.getCode(e);

    switch (code) {
      case keyboardKey.Enter:
        loadVideo();
        break;

      default:
        break;
    }
  };

  const loadVideo = async () => {
    const input = barRef.current.value;

    if (!validateURL(input)) {
      //! error
    }

    const req = `/api/youtube/info?v=${input}`;
    const res = await fetch(req, { method: 'GET' });
    const json = await res.json();
    setInfo(json);
  };

  return (
    <>
      <div className='w-full flex flex-col items-center'>
        <div
          className='max-w-3xl mt-10 flex flex-row items-center w-full'
          style={{ height: '40px' }}
        >
          <BarButton className='rounded-r-0' onClick={() => loadVideo()}>
            <IoSearch className='h-4 w-4 text-primary-300' />
          </BarButton>
          <Bar
            placeholder='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            onKeyUp={handleKeyUp}
            ref={barRef}
          />
          <BarButton
            className='rounded-l-0'
            onClick={() =>
              location.replace(
                'https://github.com/m2vi/downloader/blob/main/README.md'
              )
            }
          >
            <Tooltip>
              <IoInformationCircleOutline
                data-tip={t('pages.documentation')}
                className='h-4 w-4 text-primary-300'
              />
            </Tooltip>
          </BarButton>
        </div>
        <MainHolder info={info} />
      </div>
    </>
  );
};

export interface MainProps {
  info?: parsedProps;
}

export const Main = ({ info }: MainProps) => {
  const { t } = useTranslation();
  const { thumbnails, title, video_url } = info;
  const playerWrapperRef = React.createRef<HTMLDivElement>();

  useEffect(() => console.log(info), []);
  const {
    state: { isOpen },
    dispatch,
  } = useModal();
  return (
    <>
      <div className='w-full mt-9 px-9 max-w-3xl flex flex-col items-center'>
        <Player info={info} />

        <div className='pt-7 flex justify-center items-center'>
          <Button
            className='mr-1'
            onClick={() => {
              console.log(info.itags);
            }}
          >
            {t('actions.download')}
          </Button>
          <Button
            className='ml-1'
            color={'secondary'}
            onClick={() => dispatch({ type: 'setOpen', value: true })}
          >
            {t('actions.configure')}
          </Button>
        </div>
      </div>
      <Modal info={info} />
    </>
  );
};

export const MainHolder = ({ info }: MainProps) => {
  const valid = info !== undefined || typeof info !== 'undefined';

  interface BinProps {
    error: boolean;
  }

  const Bin = ({ error }: BinProps) => {
    return (
      <div className='w-full mt-9 px-9 max-w-3xl flex flex-col items-center'>
        <div
          className='preview bg-primary-800 h-full w-full rounded-8 cursor-pointer'
          style={{ aspectRatio: '16 / 9' }}
        ></div>
      </div>
    );
  };

  return (
    <>{!valid || !info.success ? <Bin error={true} /> : <Main info={info} />}</>
  );
};

export default Page;
