import Head from 'next/head';
import Page from '@components/pages/movies/index';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Full from '@components/Full';

const Movies = () => {
  const Router = useRouter();
  const [sort, setSort] = useState(null);

  useEffect(() => {
    const query = Router.query.key;
    setSort(query ? query : null);
  }, [Router]);

  return (
    <>
      <Head>
        <title>Movielist</title>
        <link rel="icon" type="image/svg+xml" href="/favicon/movies/favicon.svg" />
      </Head>
      {sort ? <Page sort={sort} /> : <Full className="grid place-items-center" style={{ background: '#222a33' }} />}
    </>
  );
};

export default Movies;
