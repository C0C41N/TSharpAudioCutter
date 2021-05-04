/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
	mount: {
		public: { url: '/', static: true },
		'src/renderer': { url: '/' },
	},
	routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
	plugins: [
		'@snowpack/plugin-typescript',
		'@snowpack/plugin-react-refresh',
		['electron-snowpack-plugin', { entryPath: './src/main', outPath: 'dist' }],
	],
	optimize: {
		bundle: true,
		minify: true,
		splitting: true,
		treeshake: true,
		sourcemap: false,
	},
	alias: {
		'@fonts': './src/renderer/assets/fonts',
		'@pages': './src/renderer/pages',
		'@comp': './src/renderer/components',
		'@styles': './src/renderer/styles',
		'@services': './src/renderer/services',
		'@': './src/renderer',
	},
	buildOptions: {
		baseUrl: './',
		out: 'dist/build',
	},
	devOptions: {
		open: 'none',
	},
	packageOptions: {},
};
