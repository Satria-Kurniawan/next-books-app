/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api-v1/:path*",
        destination: "https://goalsappexpress.herokuapp.com/api/:path*",
      },
    ]
  },
}
