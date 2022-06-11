const ipModule = module.exports;
const os = require('os');

function defaultResponse() {
  return '0.0.0.0';
}

function isPrivate(addr) {
  return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i
    .test(addr)
      || /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr)
      || /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i
        .test(addr)
      || /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr)
      || /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(addr)
      || /^f[cd][0-9a-f]{2}:/i.test(addr)
      || /^fe80:/i.test(addr)
      || /^::1$/.test(addr)
      || /^::$/.test(addr);
}

function isLoopback(addr) {
  return /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})/
    .test(addr)
      || /^fe80::1$/.test(addr)
      || /^::1$/.test(addr)
      || /^::$/.test(addr);
}

ipModule.getIpInfo = () => {
  const family = 'ipv4';
  const interfaces = os.networkInterfaces({ internal: true });

  const all = Object.keys(interfaces).map((network) => {
    const addresses = interfaces[network].filter((details) => details.family.toLowerCase() === family && !isLoopback(details.address) && !isPrivate(details.address));

    return addresses.length ? addresses[0].address : defaultResponse();
  });

  return !all.length ? defaultResponse() : all[0];
};
