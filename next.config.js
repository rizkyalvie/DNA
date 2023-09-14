/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.pinimg.com',
            port: '',
            pathname: '/564x/93/aa/bb/93aabb88ca7c842bc019fe695a84b981.jpg',
          },
        ],
      },
}

module.exports = nextConfig
