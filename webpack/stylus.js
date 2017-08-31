module.exports = function(paths) {
	return {
		module: {
			rules: [
				{
					test: /\.styl$/,
					include: paths,
					loader: 'style-loader!css-loader!stylus-loader'
				}
			]
		}
	}
}