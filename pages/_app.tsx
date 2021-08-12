import { AppProps } from 'next/app';
import Router from 'next/router';
import { appWithTranslation } from 'next-i18next';
import NProgress from 'nprogress';
import { NotificationContainer } from 'react-notifications';

import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';
import '@styles/globals.css';
import '@styles/bootstrap-grid.css';
import '@styles/notifications.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <NotificationContainer />
    </>
  );
};

export default appWithTranslation(MyApp);
