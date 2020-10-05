const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? 'localhost:8080' : 'localhost:8080',
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
                '~a': resolve('src/assets'),
                '~v': resolve('src/views'),
                '~c': resolve('src/components'),
            }

        }
    }
}
