// next.config.js
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    /* This is a webpack config, to add more module add them in `config.module.rule.push`*/
    // Modules added:
    // url-loader: This is to load assets as imports in files.
    webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
        config.module.rules.push(
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 250000,
                    },
                },
            },

        )
        return config
    }
})
