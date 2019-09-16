// const withCSS = require('@zeit/next-css')
// // const webpack = require("webpack");
// module.exports = withCSS({
//     // cssModules: true,
//     // cssLoaderOptions: {
//     //     importLoaders: 1,
//     //     localIdentName: "[local]___[hash:base64:5]",
//     // },
//     webpack(config, options) {
//         config.module.rules.push(
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             },
//             {
//                 test: /\.(png|jpe?g|gif)$/i,
//                 use: [
//                     {
//                         loader: 'file-loader',
//                     },
//                 ],
//             },
//         )

//         return config
//     }
// })

// module.exports = {
//     webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//         // Note: we provide webpack above so you should not `require` it
//         // Perform customizations to webpack config
//         // Important: return the modified config
//         // config.module.rules.push({
//         //     test: /\.jsx?$/,
//         //     exclude: /node_modules/,
//         //     loader: 'babel-loader'
//         // })
//         // config.module.rules.push({
//         //     test: /\.css$/,
//         //     loader: 'style-loader!css-loader?modules'
//         // })
//         // config.module.rules.push({
//         //     test: /\.(jpg|png|svg)$/,
//         //     use: [{
//         //         loader: 'url-loader',
//         //         options: {
//         //             limit: 25000
//         //         }
//         //     }]
//         // })
//         config.module.rules.push(
//             {
//                 test: /\.css$/,
//                 use: ['style-loader', 'css-loader']
//             },
//             {
//                 test: /\.(png|jpe?g|gif)$/i,
//                 use: [
//                     {
//                         loader: 'file-loader',
//                     },
//                 ],
//             },
//         )
//         // Example using webpack option
//         //config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
//         return config
//     }
//     // webpackDevMiddleware: config => {
//     //     // Perform customizations to webpack dev middleware config
//     //     // Important: return the modified config
//     //     config.module.push({
//     //         rules: [
//     //             // Babel loader, will use your project’s .babelrc
//     //             {
//     //                 test: /\.jsx?$/,
//     //                 exclude: /node_modules/,
//     //                 loader: 'babel-loader'
//     //             },
//     //             // Other loaders that are needed for your components
//     //             {
//     //                 test: /\.css$/,
//     //                 loader: 'style-loader!css-loader?modules'
//     //             },
//     //             {
//     //                 test: /\.(jpg|png|svg)$/,
//     //                 use: {
//     //                     loader: 'url-loader',
//     //                     options: {
//     //                         limit: 25000
//     //                     }
//     //                 }
//     //             }
//     //         ]
//     //     })

//     //     return config
//     // },
// };

// next.config.js
// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    /* config options here */
    webpack(config, options) {
        config.module.rules.push(
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name]-[hash:8].[ext]'//,
                            //outputPath: 'assets'
                        },
                    },
                ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 25000,
                    },
                },
            }
        )

        return config
    }
})