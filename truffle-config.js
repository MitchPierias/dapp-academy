const path = require('path')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*',
    },
    test: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*',
    },
  },
  contracts_build_directory: path.join(__dirname, 'src/contracts'),
}
