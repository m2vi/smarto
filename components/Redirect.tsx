import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export interface RedirectProps {
  type: "push" | "replace";
  url: string;
  as?: string;
  title?: string;
  options?: {
    shallow?: boolean;
    locale?: string | false;
    scroll?: boolean;
  };
}

export const Redirect = ({ type, url, as, options }: RedirectProps) => {
  const Router = useRouter();

  const defaultOptions = {
    shallow: true,
  };

  !options && (options = defaultOptions);

  useEffect(() => {
    if (!Router.isReady) return;

    switch (type) {
      case "replace":
        Router.replace(url, as, options);
        break;

      default:
        Router.push(url, as, options);
        break;
    }
  }, [Router.isReady, Router, as, options, type, url]);

  return (
    <>
      <Head>
        <title>Redirecting...</title>
      </Head>
    </>
  );
};

export default Redirect;
