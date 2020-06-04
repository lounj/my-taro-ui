const path = require('path')
const webpack = require('webpack')

const projectRoot = path.resolve(__dirname, '..')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(projectRoot, 'site'),
    filename: 'js/[name].js',
    chunkFilename: 'chunk/[name].chunk.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      BASE_NAME: '`/`'
    })
  ]
}
