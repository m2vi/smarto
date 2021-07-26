import { AppProps } from "next/app";
import Router from "next/router";

import NProgress from "nprogress";
import log from "../utils/tools/log";

import "nprogress/nprogress.css";
import "tailwindcss/tailwind.css";

import "../styles/globals.css";
import "../styles/bootstrap-grid.css";

Router.events.on("routeChangeStart", (url) => {
  log(`Loading: ${url}`, null, true);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

declare global {
  interface Window {
    brave: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
