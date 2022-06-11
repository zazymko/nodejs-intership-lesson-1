const ipModule = module.exports;

function defaultResponse() {
  return '0.0.0.0';
}

function hasConnection(req) {
  return req && !!req.connection;
}

function fromConnection(req) {
  const { connection } = req;
  if (!hasConnection(connection)) {
    return defaultResponse();
  }
  if (connection.remoteAddress) {
    return connection.remoteAddress;
  }
  if (connection.socket && connection.socket.remoteAddress) {
    return connection.socket.remoteAddress;
  }
  return defaultResponse();
}

ipModule.getIp = (req) => {
  if (!req) {
    return defaultResponse();
  }
  return fromConnection(req);
};
