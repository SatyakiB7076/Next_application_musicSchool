/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [{hostname:'images.pexels.com'},{hostname:'images.unsplash.com'}],  // Add external domains here
    },
  };
  
  export default nextConfig;
  