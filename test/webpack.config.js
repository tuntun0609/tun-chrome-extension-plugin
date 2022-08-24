// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Configuration } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
const path = require('path');

const { ChromeExtensionPlugin } = require('../dist/chrome-extension-plugin');

const resolvePath = relativePath => path.resolve(__dirname, relativePath);

/**
 * @type {Configuration}
 */
module.exports = {
	entry: resolvePath('./manifest.json'),
	output: {
		path: resolvePath('./dist'),
		filename: '[name].js',
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.(ts)$/,
				exclude: /node_modules/,
				use: 'ts-loader',
			},
		],
	},
	resolve: {
		// extensions: ['.js', '.ts'],
		// alias: {
		// 	'@': resolvePath('../../src'),
		// },
	},
	plugins: [
		new CleanWebpackPlugin(),
		new WebpackBar(),
		new ChromeExtensionPlugin(),
	],
};
