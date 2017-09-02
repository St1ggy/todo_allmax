/* Box Modules */
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const merge				= require('webpack-merge');
const webpack			= require('webpack');
/* My Modules */
const devServer		= require('./webpack/devserver');
const extractCSS	= require('./webpack/css.extract');
const pug					= require('./webpack/pug');
const uglify			= require('./webpack/js.uglify');
const minify			= require('./webpack/css.minify');
const react				= require('./webpack/react');
const css				= require('./webpack/css');

const PATHS = {
	src: path.join(__dirname, 'src'),
	app: path.join(__dirname, 'app'),
}

const common = merge([
	{
		entry: PATHS.src + '/index.js',
		output: {
			path: PATHS.app,
			filename: 'js/app.js'
		},
		plugins: [
			new htmlWebpackPlugin( {
				template: PATHS.src + '/index.pug'
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				"React": "react",
				Popper: ['popper.js', 'default'],
			}),

		]
	},
	react(),
	pug(),
	// fonts(),
]);


module.exports = function (env) {
	return env == 'production' ?
		merge([
			common,
			extractCSS(),
			uglify(),
			minify()
		]) :
		merge([
			common,
			css(),
			devServer(),
		]);
}