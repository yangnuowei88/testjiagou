const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const isLib = process.env.VUE_APP_BUILD_MODE === 'lib';
const resolve = dir => path.join(__dirname, dir);

const setChainWebpack = config => {
  config.resolve.alias.set('@', path.resolve('src'));
  config.resolve.alias.set('@sddz', path.resolve('packages'));
  config.module
    .rule('js')
    .include.add('/src')
    .end()
    .use('babel')
    .loader('babel-loader');

  if (isProd) {
    config.performance
      .set('maxEntrypointSize', 2500000)
      .set('maxAssetSize', 2000000);
    // drop console
    config.optimization.minimizer('terser').tap(args => {
      args[0].terserOptions.compress.drop_console = true;
      return args;
    });
  }
};

const setConfigureWebpack = config => {
  if (isLib) {
    const externalLibs = ['vue'];
    // 将 vue 设置为外部依赖
    let externals = [
      function(context, request, callback) {
        for (const lib of externalLibs) {
          const reg = new RegExp(`^${lib}`);
          if (reg.test(request)) {
            return callback(null, lib);
          }
        }
        callback();
      }
    ];
    config.externals = externals;
    config.output = {
      ...config.output,
      library: 'SDDZ',
      libraryExport: 'default'
    };
  }
};

module.exports = {
  publicPath: '/',
  pages: {
    index: {
      entry: resolve('src/main.js')
    }
  },
  lintOnSave: false,
  productionSourceMap: false,
  chainWebpack: config => setChainWebpack(config),
  configureWebpack: config => setConfigureWebpack(config),
  css: {
    extract: false
  },
  devServer: {
    port: 8848,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
