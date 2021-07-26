export interface FaviconProps {
  project: string;
}

export const Favicon = ({project}: FaviconProps) => {
  return (
    <>
      <link rel="apple-touch-icon" sizes="57x57" href={`/favicon/${project}/apple-icon-57x57.png`} />
      <link rel="apple-touch-icon" sizes="60x60" href={`/favicon/${project}/apple-icon-60x60.png`} />
      <link rel="apple-touch-icon" sizes="72x72" href={`/favicon/${project}/apple-icon-72x72.png`} />
      <link rel="apple-touch-icon" sizes="76x76" href={`/favicon/${project}/apple-icon-76x76.png`} />
      <link rel="apple-touch-icon" sizes="114x114" href={`/favicon/${project}/apple-icon-114x114.png`} />
      <link rel="apple-touch-icon" sizes="120x120" href={`/favicon/${project}/apple-icon-120x120.png`} />
      <link rel="apple-touch-icon" sizes="144x144" href={`/favicon/${project}/apple-icon-144x144.png`} />
      <link rel="apple-touch-icon" sizes="152x152" href={`/favicon/${project}/apple-icon-152x152.png`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`/favicon/${project}/apple-icon-180x180.png`} />
      <link rel="icon" type="image/png" sizes="192x192" href={`/favicon/${project}/android-icon-192x192.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`/favicon/${project}/favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="96x96" href={`/favicon/${project}/favicon-96x96.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`/favicon/${project}/favicon-16x16.png`} />
      <link rel="manifest" href={`/favicon/${project}/manifest.json`} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content={`/favicon/${project}/ms-icon-144x144.png`} />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
};

export default Favicon;
