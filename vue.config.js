module.exports = {
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'https://sspai.com/api/v1',
    //             changeOrigin: true,
    //             secure: false,
    //             pathRewrite: {
    //                 '/api': '/'
    //             }
    //         }
    //     }
    // },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-px-to-viewport")({
                        unitToConvert: 'px',
                        viewportWidth: 375,
                        unitPrecision: 5,
                        propList: ['*'],
                        viewportUnit: 'vw',
                        fontViewportUnit: 'vw',
                        selectorBlackList: [],
                        minPixelValue: 1,
                        mediaQuery: false,
                        replace: true,
                        exclude: undefined,
                        include: undefined,
                        landscape: false,
                        landscapeUnit: 'vw',
                        landscapeWidth: 568
                    })
                ]
            }
        }
    },

}