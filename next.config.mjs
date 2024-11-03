/** @type {import('next').NextConfig} */
const nextConfig = {
experimental: {    
    serverActions: true},
    reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix:  '/https://github.com/brandoncopeman/portfolio/tree/gh-pages'  ,
  basePath:  '/https://github.com/brandoncopeman/portfolio/tree/gh-pages'  ,
  output: 'export'
};



export default nextConfig;
