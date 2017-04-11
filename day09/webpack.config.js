/*Path é utilizado para pegar o caminho absoluto de um arquivo
ex: /home/document/folder/file.js => path.resolve(__dirname, "file") */
const path  = require("path");
const webpack = require('webpack');

/*Configuração criada a partir do seguinte tutorial https://webpack.js.org/concepts/ */
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "bundle.js",
        publicPath: '/public',
    },
    devServer: {
        inline: true,
        port: 2020
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
}