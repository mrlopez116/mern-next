// // next.config.js
// const withCSS = require('@zeit/next-css')

// module.exports = withCSS({
//     /* config options here */
//     webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
//         config.module.rules.push(
//             {
//                 test: /\.(jpg|png|gif|svg)$/,
//                 use: {
//                     loader: "url-loader",
//                     options: {
//                         limit: 250000,
//                     },
//                 },
//             },

//         )
//         return config
//     }
// })

// {
            //     test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[path][name]-[hash:8].[ext]',
            //                 publicPath: '/_next/'
            //             },
            //             // output: {
            //             //     publicPath: '/.next'
            //             // }
            //         },
            //     ]
            //},