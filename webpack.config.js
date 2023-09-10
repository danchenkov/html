// Webpack is deprecated for the sake of esbuild

// const path = require("path");
// const webpack = require("webpack");
// const isDevelopment = process.env.NODE_ENV !== "production";
// const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

// module.exports = {
//     mode: isDevelopment ? "development" : "production",
//     entry: {
//         main: "./src/main.js",
//         form: "./src/form.mjs",
//         vue: "./src/vue.js",
//         greensock: "./src/greensock.js"
//     },
//     output: {
//         path: path.resolve(__dirname, "assets"),
//         filename: "[name].js"
//     },
//     plugins: [
//         new webpack.ProvidePlugin({
//             autoprefixer: {},
//             moment: "moment"
//         }),
//         // To strip all locales except “en”
//         // new MomentLocalesPlugin(),
//         // Or: To strip all locales except “en” and “ru”
//         // (“en” is built into Moment and can’t be removed)
//         new MomentLocalesPlugin({
//             localesToKeep: ["ru"]
//         })
//     ],
//     module: {
//         rules: [{
//             test: /\.s(a|c)ss$/,
//             exclude: /\.module.(s(a|c)ss)$/,
//             use: [{
//                 loader: "file-loader",
//                 options: {
//                     name: "[name].css"
//                 }
//             }, {
//                 loader: "extract-loader"
//             }, {
//                 loader: "css-loader?-url"
//             }, {
//                 loader: "postcss-loader"
//             }, {
//                 loader: "sass-loader"
//             }]
//         }],
//         exports: [{
//             node: 'empty',
//         }]
//     },
//     resolve: {
//         extensions: [".js", ".jsx", ".scss", ".css"]
//     },
//     externals: {
//         $: 'jquery',
//         jQuery: 'jquery',
//         'window.jQuery': 'jquery',
//         Modernizr: 'modernizr'
//     }
// };