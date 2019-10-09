import express from 'express'
import path from 'path'
import expressStaticGzip from 'express-static-gzip'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../config/webpack.dev'
import logger from './logger'
import CONFIG from './config'
import argv from './argv'

const isDev = CONFIG.NODE_ENV === 'development'

const server = express()
let fs
let outDirPath

if (isDev) {
  const compiler = webpack(webpackConfig)
  const devMiddleware = webpackDevMiddleware(compiler, { ...webpackConfig.devServer })
  const hotMiddleware = webpackHotMiddleware(compiler)
  const outDirMiddleware = express.static(`${CONFIG.OUTPUT_DIR}`)
  fs = devMiddleware.fileSystem
  outDirPath = path.join(compiler.outputPath, 'index.html')
  server
    .use(devMiddleware)
    .use(hotMiddleware)
    .use(outDirMiddleware)
} else {
  const gzipMiddleware = expressStaticGzip(`${CONFIG.OUTPUT_DIR}`)
  fs = require('fs')
  outDirPath = path.resolve(CONFIG.OUTPUT_DIR, 'index.html')
  server
    .use(gzipMiddleware)
}

const staticMiddleware = express.static('static')
server
  .use(staticMiddleware)
  .disable('x-powered-by')
  .get('*', (req, res) => {
    fs.readFile(outDirPath, (err, file) => {
      if (err) {
        res.sendStatus(404)
      } else {
        res.send(file.toString())
      }
    })
  })

const customHost = argv.host || process.env.HOST
const host = customHost || null

server.listen(CONFIG.SERVER_PORT, host, err => {
  if (err) logger.error(err.message)
  else isDev ? logger.devStarted(CONFIG) : logger.prodStarted(CONFIG)
})