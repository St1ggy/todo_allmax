const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devServer = require('./webpack/devserver');
const pug = require('./webpack/pug');
const stylus = require('./webpack/stylus');
const css = require('./webpack/css')
const webpack = require('webpack');

const PATHS = {
	src: path.join(__dirname, 'src'),
	app: path.join(__dirname, 'app'),
}

const common = merge([
	{
		entry: PATHS.src + '/index.js',
		output: {
			path: PATHS.app,
			filename: 'app.js'
		},
		plugins: [
			new htmlWebpackPlugin( {
				template: PATHS.src + '/index.pug'
			})
		]
	},
	pug(),
	stylus(),
	css()
]);


module.exports = function (env) {
	return env == 'production' ?
		common :
		merge([
			common,
			devServer()
		]);
}