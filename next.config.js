require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')
const withTM = require('next-transpile-modules')

module.exports = withTM({
    transpileModules: ['shared'],
    webpack: config => {
        config.plugins = config.plugins || []

        config.plugins = [
            ...config.plugins,
            new Dotenv({
                path: path.join(__dirname, '.env'),
                systemvars: true
            })
        ]

        return config
    }
})