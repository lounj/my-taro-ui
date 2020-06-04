const path = require('path');
const Webpack = require('webpack');
const WebpackConfig = require('./webpack.config');
const WebpackDevConfig = require('./webpack.dev.config');
const WebpackDevServer = require('webpack-dev-server');
const devServerConfig = require('./dev-server.config');
const webpackMerge = require('webpack-merge')

const { prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');

const openBrowser = require('react-dev-utils/openBrowser');

const urls = prepareUrls('http', '127.0.0.1', '10088')
const projectRoot = path.resolve(__dirname, '..');
const devServerConf = devServerConfig({
  publicPath: '/',
  contentBase: path.join(projectRoot, 'site'),
  protocol: 'http',
  host: '127.0.0.1',
  publicUrl: urls.lanUrlForConfig
})

// 此处合并不能用Object.assign
const webpackConf = webpackMerge(WebpackConfig, WebpackDevConfig)

const compiler = Webpack(webpackConf);

const server = new WebpackDevServer(compiler, devServerConf);

server.listen(10088, '127.0.0.1', err => {
  if (err) {
    return console.log(err);
  }
  console.log('starting......')
  openBrowser(urls.localUrlForBrowser);

  // ['SIGINT', 'SIGTERM'].forEach(function(sig) {
  //   process.on(sig, function() {
  //     server.close();
  //     process.exit();
  //   });
  // });
})