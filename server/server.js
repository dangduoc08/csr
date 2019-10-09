import express from 'express'
import dotenv from 'dotenv'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../config/webpack.dev'

dotenv.config()
const server = express()

const port = process.env.SERVER_PORT
const compiler = webpack(webpackConfig)

// Middleware
const devMiddleware = webpackDevMiddleware(compiler, { ...webpackConfig.devServer })
const hotMiddleware = webpackHotMiddleware(compiler)
const staticMiddleware = express.static('dist')

server.use(devMiddleware)
server.use(hotMiddleware)
server.use(staticMiddleware)
server.listen(port, () => console.log(`Server running on port ${port}!`))