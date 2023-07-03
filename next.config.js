/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.BASE_PATH || '',
  assetPrefix: process.env.ASSETS_PREFIX || undefined,
  productionBrowserSourceMaps: process.env.RBC_ENVIRONMENT === 'review',
  /**
   * Публичный конфиг, доступный на фронте
   */
  publicRuntimeConfig: {
    RBC_ENVIRONMENT: process.env.RBC_ENVIRONMENT,
    IS_MIRROR_SITE: process.env.IS_MIRROR_SITE,
    BASE_PATH: process.env.BASE_PATH,
    ASSETS_PREFIX: process.env.ASSETS_PREFIX,
    API_BASE_URL: process.env.API_BASE_URL,
    API_SSR_BASE_URL: process.env.API_SSR_BASE_URL,
    AUTH_API_BASE_URL: process.env.AUTH_API_BASE_URL,
    PAYWALL_API_BASE_URL: process.env.PAYWALL_API_BASE_URL,
    RBC_FOX_BASE_URL: process.env.RBC_FOX_BASE_URL,
  },

});
