import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';
import '@styles/globals.css';
import '@styles/bootstrap-grid.css';
import '@styles/notifications.css';

import { AppProps } from 'next/app';
import NProgress from 'nprogress';
import { NotificationContainer } from 'react-notifications';
import Router from 'next/router';
import { appWithTranslation } from 'next-i18next';
import console from '@utils/tools/console';
import { useEffect } from 'react';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    try {
      const t = pageProps?._nextI18Next;

      console.translation(t?.initialLocale);
    } catch (error) {
      console.error(error);
    }
  }, [pageProps]);
  return (
    <>
      <Component {...pageProps} />
      <NotificationContainer />
    </>
  );
};

export default appWithTranslation(MyApp);
