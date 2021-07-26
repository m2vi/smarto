import { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { appWithTranslation } from "next-i18next";

import "nprogress/nprogress.css";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

NProgress.configure({
  showSpinner: false,
  speed: 500,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
