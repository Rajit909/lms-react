/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    
    images: {
        remotePatterns: [0]['ap-south-1.graphassets.com/*'],
      },
};


export default nextConfig;