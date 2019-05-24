const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

module.exports = {
    publicPath: '',
    runtimeCompiler: true,
    chainWebpack: config => {

        // 完善解析器
        config.module
            .rule('html')
                .test(/\.html$/)
                .use('html-loader')
                    .loader('html-loader')

        // 不打包的第三方
        config
            .externals({
                axios: 'axios',
                vuex: 'Vuex',
                vue: 'Vue',
                'vue-router': 'VueRouter',
                'element-ui': 'ELEMENT',
                // moment: 'moment',
                // 'perfect-scrollbar': 'PerfectScrollbar',
                // 'vue-echarts': 'VueECharts',
                // echarts: 'Echarts',
            })

        // 插入到页面的包
        config
            .plugin('assets')
            .use(new HtmlWebpackIncludeAssetsPlugin({
                assets: [
                    // vue libs
                    'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js',
                    'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.js',
                    'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.js',
                    // element-ui
                    'https://cdn.jsdelivr.net/npm/element-ui@2.4.8/lib/index.js',
                    'https://cdn.jsdelivr.net/npm/element-ui@2.4.8/lib/theme-chalk/index.css',
                    // axios
                    'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.js',
                ],
                append: false
            }))

        // config.optimization
        //     .runtimeChunk({
        //         name: 'runtime'
        //     })
        //     .splitChunks({
        //         chunks (chunk) {
        //             return chunk.name && chunk.name.includes('core-js') === false
        //         }
        //     })

        // 代理请求数据
        config
            .devServer
                .proxy({
                    "/api/v1": {
                        "target": 'https://cnodejs.org/'
                    }
                })
    }
}