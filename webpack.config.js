var path = require('path');

module.exports = [{
    mode: 'production',
    entry: './src/uiComp/basicInput/buttons/Button.js',
    output: {
        path: path.resolve('uiComp/basicInput/buttons'),
        filename: 'Button.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}]