/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https', // Specify the protocol (e.g., 'http' or 'https')
            hostname: 'example.com', // Replace with the hostname you want to allow
            port: '', // Specify the port if applicable (leave empty for default ports)
            pathname: '/**', // Match all paths under the hostname
          },
        ],
      },
};

export default nextConfig;
