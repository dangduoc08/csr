const { argv, Network } = require('../utils')
let port = process.env.PORT || argv.port || '8080'
const host = argv.host || 'localhost'
const network = Network.getInstance()
module.exports = {
  HOST: host,
  NETWORK: network.LAN,
  NODE_ENV: process.env.NODE_ENV,
  SERVER_PORT: +port,
  WEBPACK_BUNDLE_ANALYZER_PORT: ++port,
  OUTPUT_DIR: 'client_build'
}