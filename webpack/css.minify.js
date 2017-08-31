const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function() {
	return {
		plugins: [
			new optimizeCssAssetsPlugin({
				assetNameRegExp: /\.css$/g,
				cssProcessor: require('cssnano'),
				cssProcessorOptions: { discardComments: { removeAll: true } },
				canPrint: true
			})
		]
	};
};