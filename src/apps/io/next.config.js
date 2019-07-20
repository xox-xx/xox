const withTM = require('next-transpile-modules')

module.exports = withTM({
    transpileModules: ['shared'],
    // useFileSystemPublicRoutes: false,
    distDir: '../../../dist/functions/io',
    webpack: require('../../../scripts/config')
})