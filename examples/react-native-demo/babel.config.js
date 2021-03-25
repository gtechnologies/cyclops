module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	// https://callstack.github.io/react-native-paper/getting-started.html
	plugins: ['optional-require'],
	env: {
		production: {
			plugins: ['react-native-paper/babel'],
		},
	},
};
