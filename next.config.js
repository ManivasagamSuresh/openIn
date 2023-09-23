// next.config.js
module.exports = {
  images: {
    domains: ['lh3.googleusercontent.com'], // Add the desired domains here
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Exclude styled-jsx from being bundled
    config.externals.push('styled-jsx');
    
    return config;
  },
};
