/* config-overrides.js */

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

module.exports = {
	// The Webpack config to use when compiling your react app for development or production.
	webpack: function (config, env) {
		let newConfig = Object.assign({}, config);
		newConfig.resolve.symlinks = false;

		console.log(newConfig.module.rules);
		// newConfig.module = {
		// 	rules: [
		// 		{
		// 			test: /\.jsx?$/,
		// 			loader: 'babel-loader',
		// 			exclude: /node_modules/,
		// 			query: {
		// 				cacheDirectory: true,
		// 				presets: ['react', 'es2015'],
		// 			},
		// 		},
		// 	],
		// };

		return newConfig;
	},
};
