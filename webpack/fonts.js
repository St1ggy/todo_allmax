module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|ttf|eot|otf)$/,
                    loaders: [
                        'style',
                        'css?importLoaders=1',
                        'font?format[]=truetype&format[]=woff&format[]=embedded-opentype'
                    ]
                },
            ]
        }
    };
}