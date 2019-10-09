const argv = require('./argv')
const IP = require('./ip')
let PORT = process.env.PORT || argv.port || '8080'
let LOCAL_HOST = argv.host || 'localhost'
const ip = IP.getInstance()
module.exports = {
  HOST: LOCAL_HOST,
  NETWORK: ip.address,
  NODE_ENV: process.env.NODE_ENV,
  SERVER_PORT: +PORT,
  WEBPACK_BUNDLE_ANALYZER_PORT: ++PORT,
  OUTPUT_DIR: 'client_build'
}