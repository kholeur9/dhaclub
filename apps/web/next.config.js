/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        allowedOrigins: ["my-forwared--host.com"]
    }
};

export default nextConfig;
