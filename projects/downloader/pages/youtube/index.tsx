import Head from 'next/head';
import YouTube from '../../components/youtube/Page';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ModalProvider } from '../../context/Modal';
import { getSupportedItags } from '../../utils/itags';

const index = () => {
  return (
    <>
      <Head>
        <title>YouTube</title>
      </Head>
      <ModalProvider>
        <YouTube />
      </ModalProvider>
    </>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default index;
