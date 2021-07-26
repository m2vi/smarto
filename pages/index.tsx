import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { Button } from "../components/Button";
import { ButtonLink } from "../components/ButtonLink";
import Favicon from "../components/Favicon";
import { Input } from "../components/Input";
import { isDevelopment } from "../utils/env/constants";
import rickroll from "../utils/fun/rickroll";

const Login = () => {
  const loggedIn = false;

  const { isReady, replace } = useRouter();

  useEffect(() => {
    isDevelopment && replace(`/s/`);
  }, [isReady, replace]);

  if (loggedIn) {
    return null;
  } else {
    return (
      <>
        <Head>
          <title>Login</title>
          <Favicon project="hub" />
        </Head>
        <div className="justify-center flex items-center w-full h-full">
          <div className="w-full max-w-md">
            <div className="bg-primary-900 shadow-md rounded-8 p-6 mb-4">
              <div className="mb-4">
                <Input type="text" placeholder="Username" />
              </div>
              <div className="mb-6">
                <Input type="password" placeholder="Password" />
              </div>
              <div className="flex items-center justify-between">
                <Button>Login</Button>
                <ButtonLink onClick={() => rickroll()}>Forgot Password?</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
