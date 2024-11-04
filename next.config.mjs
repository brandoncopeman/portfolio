/** @type {import('next').NextConfig} */
const nextConfig = {
experimental: {    
    serverActions: true},
    output: 'export',
    assetPrefix: './',
    images: {
      unoptimized: true
    }
}

export default nextConfig;
