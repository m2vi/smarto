import Head from "next/head";
import { Favicon } from "../../components/Favicon";

const index = () => {
  return (
    <>
      <Head>
        <title>Lookup</title>
        <Favicon project="lookup" />
      </Head>
    </>
  );
};

export default index;
