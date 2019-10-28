const os = require('os')

class Network {
  static instance
  constructor() {
    this.LAN
  }

  getLAN() {
    let LAN
    Object.values(os.networkInterfaces()).forEach(networkInterface => {
      networkInterface.forEach(iface => {
        if (iface.family === 'IPv4' && !iface.internal) {
          LAN = iface.address
          return
        }
      })
    })
    return LAN
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Network()
      this.LAN = this.instance.getLAN()
    }
    return this
  }
}

module.exports = Network

