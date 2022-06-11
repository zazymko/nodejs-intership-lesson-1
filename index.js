const network = require('./network');
const request = require('./request');

module.exports = {
  getIpByRequest: (req) => request.getIp(req),
  getPublicIpV4ByNetwork: () => network.getIpInfo(),
};
