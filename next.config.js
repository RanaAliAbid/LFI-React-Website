/** @type {import('next').NextConfig} */
const nextConfig = {

	experimental: {
		serverActions: true,
	},

	reactStrictMode: true,

	webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],	

		});

		return config;
	}

	}

module.exports = nextConfig
