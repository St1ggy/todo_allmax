const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	src: path.join(__dirname, 'src'),
	app: path.join(__dirname, 'app'),
}

module.exports = {
	entry: PATHS.src + '/index.js',
	output: {
		path: PATHS.app,
		filename: 'app.js'
	},
	plugins: [
		new htmlWebpackPlugin( {
			template: PATHS.src + '/index.pug'
		})
	],
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			}
		]
	}
};