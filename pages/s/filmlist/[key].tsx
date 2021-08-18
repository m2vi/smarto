import Head from 'next/head';
import Page from '@components/pages/filmlist/index';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Full from '@components/Full';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPaths } from 'next';
import { FilmSearchProvider } from '@context/filmSearch';

const Films = () => {
  const Router = useRouter();
  const [sort, setSort] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const query = Router.query.key;
    setSort(query ? query : null);
  }, [Router]);

  return (
    <FilmSearchProvider>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon/filmlist/favicon.svg" />
      </Head>
      <style jsx global>{`
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
          --color-primary-300: #6c6f7c !important;
        }

        #__next,
        html,
        body {
          background: #121212;
        }
      `}</style>
      <NextSeo description="A filmlist with all movies and series I've ever watched" title={t('pages.hub.widgets.filmlist')} defaultTitle="Smarto" />
      {sort ? <Page sort={sort} /> : <Full className="grid place-items-center" />}
    </FilmSearchProvider>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

export default Films;
