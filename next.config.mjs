/** @type {import('next').NextConfig} */
const nextConfig = {
experimental: {    
    serverActions: true},
    reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix:  '/your-repository-name/'  ,
  basePath:  '/your-repository-name'  ,
  output: 'export'
};



export default nextConfig;
