const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './public/dovebox.jsx',
    output: {
        path: path.join(__dirname, "public"),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devtool: 'source-map'
};