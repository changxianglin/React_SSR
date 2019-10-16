const withCss = require('@zeit/next-css')

const configs = {
  distDir: 'dest',
  generateEtags: true,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  pageExtensions: ['jsx', 'js'],
  generateBuildId: async () => {
    if(process.env.YOUR_BUILD_ID) {
      return process.env.YOUR_BUILD_ID
    }

    return null
  },
  webpack(configs, options) {
    return configs
  },
  webpackDevMiddleware: config => {
    return config
  },
  env: {
    customKey: 'value',
  },
  serverRuntimeConfig: {
    mySecret: 'secret',
    secondSecret: process.env.SENCOND_SECRET,
  },
  publicRuntimeConfig: {
    staticFolder: '/static',
  },
}

if(typeof require !== 'undefined') {
  require.extensions['.css'] = file => { 
  }
} 

module.exports = withCss({
  // distDir: 'dest',
  env: {
    customKey: 'value',
  },
  serverRuntimeConfig: {
    mySecret: 'secret',
    secondSecret: process.env.SENCOND_SECRET,
  },
  publicRuntimeConfig: {
    staticFolder: '/static',
  },
})