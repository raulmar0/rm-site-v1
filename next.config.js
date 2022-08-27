/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// Without gh pages or for develop
// module.exports = nextConfig

// With gh pages
module.exports = {
  assetPrefix: '/raulmar-site/',
  basePath: '/raulmar-site',
}
