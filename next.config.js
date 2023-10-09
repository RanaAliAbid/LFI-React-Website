/** @type {import('next').NextConfig} */
const nextConfig = {
	

	experimental: {
		serverActions: true,
	},

	reactStrictMode: true,

	headers() {
		return [
		  {
			source: '/(.*)',
			headers: [
				{
					key: 'Strict-Transport-Security',
					value: 'max-age=63072000; includeSubDomains; preload',
				},
			],
		  },
		];
	},

	async redirects() {
		return [
			{
				source: '/project/:path*',
				destination: '/:path*',
				permanent: true,
			},
			{
				source: '/dapps',
				destination: '/',
				permanent: true,
			},
			
			{
				source: '/dao',
				destination: '/ldao',
				permanent: true,
			},

			{
				source: '/roadmap',
				destination: 'https://white-paper.lfi.io/introduction/roadmap',
				basePath: false,
        		permanent: false,
			},

			{
				source: '/phone/lfi-one',
				destination: '/lfione',
				permanent: true,
			},

			{
				source: '/hardware',
				destination: '/minting-machine',
				permanent: true,
			},

			{
				source: '/quantwise',
				destination: '/',
				permanent: true,
			},

			{
				source: '/contactus',
				destination: '/',
				permanent: true,
			},
		]
	},

	

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
