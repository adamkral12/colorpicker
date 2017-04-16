var path = require('path');
var classNames = require('classnames');

module.exports = {
    entry: '../main.jsx',
    output: {
        path: path.join('/var/www/html/colorPicker/bin'),
        filename: 'app.bundle.js'
    },
    context: __dirname,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    }
}