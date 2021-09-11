import { FilmSearchProvider } from '@context/filmSearch';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Page from '@components/pages/filmlist/index';
import { useTranslation } from 'react-i18next';

const IfWrapper = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <FilmSearchProvider>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon/filmlist/favicon.svg" />
      </Head>
      <NextSeo description="A filmlist with all movies and series I've ever watched" title={t('pages.hub.widgets.filmlist')} defaultTitle="Smarto" />
      {props.items ? <Page {...(props as any)} /> : null}
    </FilmSearchProvider>
  );
};

export default IfWrapper;
