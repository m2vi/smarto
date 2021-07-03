import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export interface RedirectProps {
  type: "push" | "replace";
  url: string;
  as?: string;
  options?: {
    shallow?: boolean;
    locale?: string | false;
    scroll?: boolean;
  };
}

export const Redirect = ({ type, url, as, options }: RedirectProps) => {
  const Router = useRouter();

  useEffect(() => {
    if (!Router.isReady) return;

    switch (type) {
      case "replace":
        Router.replace(url, as, options);
        break;

      default:
        if (!options) {
          options = {
            shallow: true,
          };
        }
        Router.push(url, as, options);
        break;
    }
  }, [Router.isReady]);

  return (
    <>
      <Head>
        <title>Redirecting...</title>
      </Head>
    </>
  );
};

export default Redirect;
