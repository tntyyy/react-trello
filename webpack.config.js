const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === "production";

const filenameWithHash = (name, extension) => `${name}.[hash].${extension}`;

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/index.tsx")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[hash].js',
        clean: true,
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss'],
        alias: {
            "@": path.resolve(__dirname, 'src'),
            "@utils": path.resolve(__dirname, "src/utils"),
            "@components": path.resolve(__dirname, "src/components"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@store": path.resolve(__dirname, "src/store"),
            "@types": path.resolve(__dirname, "src/types"),
            "@assets": path.resolve(__dirname, "src/assets"),
            "@constants": path.resolve(__dirname, "src/constants")
        }
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin()
        ]
    },
    devServer: {
        port: "5050",
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test:  /\.(js|jsx|ts|tsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env','@babel/react']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.ts(x?)$/,
                use: {
                    loader: "ts-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  {
                      loader: "style-loader",
                  },
                  {
                      loader: "css-loader",
                      options: {
                          importLoaders: 1,
                          modules: {
                              mode: "local",
                          },
                      },
                  },
                  {
                      loader: "sass-loader",
                  },
              ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
            minify: {
                removeComments: isProd
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public/favicon.ico"),
                    to: path.resolve(__dirname, "dist")
                },
                {
                    from: path.resolve(__dirname, "public/manifest.json"),
                    to: path.resolve(__dirname, "dist")
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filenameWithHash("bundle", "css")
        })
    ]
}