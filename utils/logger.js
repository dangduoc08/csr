const chalk = require('chalk')

const divider = chalk.dim('\n--------------------------------------------')
const log = console.log
const error = console.error

const logger = {
  error: err => error(chalk.red(err)),

  devStarted: ({ HOST, NETWORK, SERVER_PORT, WEBPACK_BUNDLE_ANALYZER_PORT }) => {
    log(`
${chalk.bgHex('#adc6ff').hex('#2f54eb').bold(' Development Access URLs ')}${divider}
${chalk.bold('Bundle analyzer')}: ${chalk.magentaBright(`http://${HOST}:${WEBPACK_BUNDLE_ANALYZER_PORT}/`)}
      ${chalk.bold('Localhost')}: ${chalk.magentaBright(`http://${HOST}:${SERVER_PORT}/`)}
            ${chalk.bold('LAN')}: ${chalk.magentaBright(`http://${NETWORK}:${SERVER_PORT}/`)}${divider}
${chalk.italic.hex('#adc6ff')('Press CTRL+C to stop')}
`)
  },

  prodStarted: ({ HOST, NETWORK, SERVER_PORT }) => {
    log(`
${chalk.bgHex('#adc6ff').hex('#2f54eb').bold(' Production Access URLs ')}${divider}
      ${chalk.bold('Localhost')}: ${chalk.magentaBright(`http://${HOST}:${SERVER_PORT}/`)}
            ${chalk.bold('LAN')}: ${chalk.magentaBright(`http://${NETWORK}:${SERVER_PORT}/`)}${divider}
${chalk.italic.hex('#adc6ff')('Press CTRL+C to stop')}
`)
  }
}

module.exports = logger