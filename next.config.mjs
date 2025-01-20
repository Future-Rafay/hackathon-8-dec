/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Specify the protocol
        hostname: 'cdn.sanity.io', // Replace with the hostname you want to allow
        port: '', // Port (optional, leave empty for default)
        pathname: '/**', // Match all paths under the hostname
      },
    ],
  },
};

export default nextConfig;
