import { AppProps } from 'next/app';
import Router from 'next/router';
import { appWithTranslation } from 'next-i18next';
import NProgress from 'nprogress';

import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';
import '@styles/globals.css';
import '@styles/bootstrap-grid.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);
