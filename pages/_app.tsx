import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';
import '@styles/globals.css';
import '@styles/notifications.css';

import { AppProps } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { ToastContainer } from 'react-toastify';
import { IoClose } from 'react-icons/io5';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={4500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable={true}
        pauseOnHover={true}
        closeButton={props => <IoClose className="text-primary-300" {...props} />}
      />
    </>
  );
};

export default appWithTranslation(MyApp);
