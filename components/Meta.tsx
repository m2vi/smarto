import { MetaProps } from '@Types/components';
import { user } from '@config/me';

const Meta = ({ description, langauge }: MetaProps) => {
  return (
    <>
      <meta name="theme-color" content="#1f1d2b" />
      <meta httpEquiv="content-Type" content="text/html; utf-8" />
      <meta name="robots" content="INDEX,FOLLOW" />
      <meta httpEquiv="content-Language" content={langauge} />
      <meta name="description" content={description} />
      <meta name="author" content={user.nickname} />
      <meta name="publisher" content={user.nickname} />
      <meta name="audience" content="Experten" />
      <meta name="page-type" content="Software Download" />
      <meta name="page-topic" content="Computer" />
    </>
  );
};

export default Meta;
