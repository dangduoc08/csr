const os = require('os')

class IP {
  constructor() {
    this.instance
    this.address
  }

  getAddress() {
    let address
    Object.values(os.networkInterfaces()).forEach(networkInterface => {
      networkInterface.forEach(iface => {
        if (iface.family === 'IPv4' && !iface.internal) {
          address = iface.address
          return
        }
      })
    })
    return address
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new IP()
      this.address = this.instance.getAddress()
    }
    return this
  }
}

module.exports = IP

