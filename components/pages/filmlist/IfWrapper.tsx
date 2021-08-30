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
      <style jsx global>{`
        ::selection {
          color: white;
          background: #d7b350;
        }

        #nprogress .bar {
          background: #d7b350 !important;
        }
        #nprogress .peg {
          box-shadow: 0 0 10px #d7b350, 0 0 5px #d7b350 !important;
        }

        #nprogress .spinner-icon {
          border-top-color: #d7b350 !important;
          border-left-color: #d7b350 !important;
        }

        html {
          --color-primary-300: #797d8b !important;
        }

        #__next,
        html,
        body {
          background: #121212;
        }
      `}</style>
      <NextSeo description="A filmlist with all movies and series I've ever watched" title={t('pages.hub.widgets.filmlist')} defaultTitle="Smarto" />
      {props.items ? <Page {...(props as any)} /> : null}
    </FilmSearchProvider>
  );
};

export default IfWrapper;
