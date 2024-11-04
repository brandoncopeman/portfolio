/** @type {import('next').NextConfig} */
const nextConfig = {
experimental: {    
    serverActions: true},
    output: "export",
    images: {
      loader: "akamai",
      path: "",
    },
    assetPrefix: "./",

};


export default nextConfig;
