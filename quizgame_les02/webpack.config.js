const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        libraryTarget: 'var',
        library: 'ep'
    },
    devServer: {
        contentBase: './public'
    }
};