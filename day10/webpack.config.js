const path  = require("path");

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "bundle.js",
        publicPath: '/public',
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: ['babel-loader', 'eslint-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: 9000
    }
}