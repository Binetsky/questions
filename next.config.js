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
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_DB_NAME: process.env.MONGODB_DB_NAME,
    API_URL: process.env.API_URL,
  },
});
