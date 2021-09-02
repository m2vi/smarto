import { ButtonLink } from '@components/ButtonLink';
import Favicon from '@components/Favicon';
import Head from 'next/head';
import { IoArrowBackOutline } from 'react-icons/io5';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <>
      <Head>
        <title>404</title>
        <Favicon project="hub" />
      </Head>
      <div className="h-full w-full flex justify-center items-center text-center">
        <div>
          <h1>404</h1>
          <p className="text-primary-300 pb-2">Oh no! That page doesn&apos;t exist!</p>
          <Link href="/" passHref={true} replace={false}>
            <span>
              <ButtonLink className="text-accent">
                <span className="flex items-center justify-center mx-auto">
                  <IoArrowBackOutline /> Return to Home Page
                </span>
              </ButtonLink>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
