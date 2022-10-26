module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-postcss'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config) {
    config.base = '/storybook-static/'
    // if(process.env?.STORYBOOK_BASE) {
    //   console.info(`Setting storybook base path to ${process.env.STORYBOOK_BASE}`);
    //   config.base = process.env.STORYBOOK_BASE ||  config.base;
    // }
    return config;
  }
}