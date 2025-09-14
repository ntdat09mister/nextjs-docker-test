/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    // Bật standalone output để tạo server.js
  },
  // Tắt telemetry
  telemetry: false,
}
