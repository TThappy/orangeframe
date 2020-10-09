const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    outputDir: 'dist',
    assetsDir: 'assets',
    lintOnSave: process.env.NODE_ENV !== 'production',
    filenameHashing: true,
    devServer: {
        port: 8002
    },
    configureWebpack: {
        resolve: {
            alias: {
                //配置路径别名
                '~as': resolve('src/assets'),
                '~a': resolve('src/api'),
                '~v': resolve('src/views'),
                '~c': resolve('src/components'),
                '~p': resolve('src/plugin'),
            }

        }
    }
}
