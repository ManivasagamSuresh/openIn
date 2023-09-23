// next.config.js
module.exports = {
  images: {
    domains: ['lh3.googleusercontent.com'], // Add the desired domains here
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Exclude styled-jsx from being bundled
    if (!isServer) {
      config.resolve.alias['styled-jsx$'] = require.resolve('styled-jsx/noop.js');
    }
    return config;
  },
};
