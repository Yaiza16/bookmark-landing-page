const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin }= require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext][query]'
                  }
            },

            {
                test: /\.(ttf|eot|woff|woff2)$/,
                type: "asset/resource",
                generator: {
                    filename: 'fonts/[name][ext][query]'
                  }
              },


            {
                test: /\.((c|sc|sa)ss|css)$/,
                use: [
                    {
                        loader: "style-loader"
                    },

                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "resolve-url-loader" // This loader solve sass urls problems
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true, // This is required in order to make urls (vendors/iconmoon) work.

                          }
                    },
                ]
            },
            
        ]
    },


    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new CleanWebpackPlugin(),
    ]
}