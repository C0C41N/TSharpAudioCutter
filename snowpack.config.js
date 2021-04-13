/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
	mount: {
		public: { url: '/', static: true },
		'src/renderer': { url: '/' },
	},
	plugins: [
		'@snowpack/plugin-sass',
		'@snowpack/plugin-typescript',
		'@snowpack/plugin-react-refresh',
		'electron-snowpack-plugin',
	],
	optimize: {
		bundle: true,
		minify: true,
		splitting: true,
		treeshake: true,
	},
	alias: {
		'@svgs': './src/renderer/svgs',
		'@comp': './src/renderer/components',
		'@services': './src/renderer/services',
		'@': './renderer/src',
	},
	buildOptions: {
		baseUrl: './',
		out: 'dist/build',
	},
	devOptions: {
		open: 'none',
	},
	routes: [],
	packageOptions: {},
};
