/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: false,
	output: 'export',
	images: {
		unoptimized: true,
		loader: 'akamai',
		path: '/',
	},
};

module.exports = nextConfig;
