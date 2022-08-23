// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Configuration } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const WebpackBar = require('webpackbar');
const { resolvePath } = require('../scripts/path');

/**
 * @type {Configuration}
 */
module.exports = {
	entry: resolvePath('../src/chrome-extension-plugin.ts'),
	output: {
		path: resolvePath('../dist'),
		filename: '[name].js',
	},
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
		extensions: ['.js', '.ts'],
		alias: {
			'@': resolvePath('../../src'),
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		new ESLintPlugin(),
		new WebpackBar(),
	],
};
