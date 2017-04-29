// Selective eslint ignores in this file are because this file needs to be readable directly by
// node, so it can't have fancy es6 features.
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const sourcePath = path.join(__dirname, './src');
const outputPath = path.join(__dirname, './dist');

// const extractCSS = new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true });


// noinspection Eslint
const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor.bundle-[hash].js',
    }),
    new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
    new HtmlWebpackPlugin({
        template: `${sourcePath}/index.ejs`,
        favicon: `${sourcePath}/favicon.ico`,
        production: isProd,
        inject: true,
    })
];

const jsEntry = [
    'index',
];

if (isProd) {
    // noinspection Eslint
    plugins.push(
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
        },
        output: {
            comments: false,
            semicolons: false,
        },
    })
    // extractCSS
  );
} else {
    // noinspection Eslint
    plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = {
    devtool: 'source-map',
    context: sourcePath,
    entry: {
        js: jsEntry,
        vendor: [
            'react',
            'react-dom',
        ],
    },
    output: {
        path: outputPath,
        filename: 'bundle-[hash].js',
        chunkFilename: 'chunk-[chunkhash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]',
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]_[local]-[hash:base64:5]',
                        }
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                    {
                        // Note: this loader must remain last for js to make sure it gets untouched
                        // files
                        loader: 'eslint-loader',
                        options: {
                            // This is just a convenience; don't block loading
                            emitWarning: true,
                        },
                    }
                ],
            },
            {
                test: /\.(gif|png|jpg|jpeg)(\?[a-z0-9]+)?$/,
                use: 'file-loader',
            },
            { test: /\.(woff2?|svg)$/, use: 'url-loader?limit=10000' },
            { test: /\.(ttf|eot)$/, use: 'file-loader' },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            sourcePath,
            'node_modules',
        ],
    },
    plugins,
    devServer: {
        contentBase: './src',
        historyApiFallback: true,
        port: 3000,
        hot: true,
        compress: isProd,
        stats: { colors: true },
    },
};
