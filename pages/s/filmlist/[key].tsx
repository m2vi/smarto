import Head from 'next/head';
import Page from '@components/pages/filmlist/index';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Full from '@components/Full';
import { NextSeo } from 'next-seo';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPaths } from 'next';

const Films = () => {
  const Router = useRouter();
  const [sort, setSort] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const query = Router.query.key;
    setSort(query ? query : null);
  }, [Router]);

  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon/filmlist/favicon.svg" />
      </Head>
      <NextSeo description="A filmlist with all movies and series I've ever watched" title={t('pages.hub.widgets.filmlist')} defaultTitle="Smarto" />
      {sort ? <Page sort={sort} /> : <Full className="grid place-items-center" style={{ background: '#121212' }} />}
    </>
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
