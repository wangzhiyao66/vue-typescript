// vue 项目配置文件
const path = require('path')

module.exports = {
  //打包项目起始路径设置为相对路径
  publicPath: './',

  css: {
    sourceMap: true, // 开启 CSS source maps
  },

  productionSourceMap: false,

  //打包输出路径
  outputDir: 'dist',

  //文件名hash
  filenameHashing: true,

  lintOnSave: false
};
