/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: '/custom-loader.ts',
  },
};

export default nextConfig;
