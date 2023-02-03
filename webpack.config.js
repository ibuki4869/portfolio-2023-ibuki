const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv').config();
module.exports = defineConfig({
    resolve: {
        extensions: ['.ts', '.js'],
    },
    node: { fs: 'empty' },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.parsed)
        }),
    ]
})
