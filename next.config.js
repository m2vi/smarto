const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/s/discover',
        permanent: true,
      },
      {
        source: '/s',
        destination: '/s/discover',
        permanent: true,
      },
      {
        source: '/s/movielist',
        destination: '/s/movielist/all',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['cdn.discordapp.com', 'image.tmdb.org'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
