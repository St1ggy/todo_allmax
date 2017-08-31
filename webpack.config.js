const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
	src: path.join(__dirname, 'src'),
	app: path.join(__dirname, 'app'),
}

const common = {
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

const devCfg = {
	devServer: {
		stats: 'errors-only',
		port: '3000'
	}
}

module.exports = function (env) {
	return env == 'production' ?
		common :
		Object.assign({}, common, devCfg);
}