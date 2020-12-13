/* config-overrides.js */

var path = require('path');
var fs = require('fs');
const {
	override,
	addDecoratorsLegacy,
	babelInclude,
	disableEsLint,
} = require('customize-cra');

module.exports = function (config, env) {
	return Object.assign(
		config,
		override(
			disableEsLint(),
			addDecoratorsLegacy(),
			/*Make sure Babel compiles the stuff in the common folder*/
			babelInclude([
				path.resolve('src'), // don't forget this
				fs.realpathSync('node_modules/cyclops'),
			]),
		)(config, env),
	);
};

/*
module.exports = function override(config, env) {
	let loaders = config.module.rules[1].oneOf;
	loaders.splice(loaders.length - 1, 0, {
		test: /\.jsx?$/,
		loader: 'babel',
		exclude: /node_modules/,
		query: {
			cacheDirectory: true,
			presets: ['react', 'es2015'],
		},
	});
	return config;
};

*/
/*
module.exports = {
	// The Webpack config to use when compiling your react app for development or production.
	webpack: function (config, env) {
		let newConfig = Object.assign({}, config);
		newConfig.resolve.symlinks = false;

		console.log(newConfig.module.rules);
		// newConfig.module = {
		// 	rules: [
		// 		{
		// 			test: /\.js|jsx|ts|tsx?$/,
		// 			loader: 'babel-loader',
		// 			exclude: /node_modules/,
		// 			query: {
		// 				cacheDirectory: true,
		// 				presets: [
		// 					'env',
		// 					'react',
		// 					'@babel/preset-env',
		// 					'es2015',
		// 				],
		// 			},
		// 		},
		// 	],
		// };
		console.log(newConfig.module.rules);
		//return 'cat';
		return newConfig;
	},
};
*/
