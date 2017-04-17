var path = require('path');
module.exports = {
    entry: './main.jsx',
    output: {
        path: path.join('/var/www/html/colorPicker/bin'),
        filename: 'app.bundle.js'
    },
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