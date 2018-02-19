const restify = require('restify'),
  config = require('./config'),
  logger = require('./logger');

const server = restify.createServer({
  name: 'Nodo',
  version: '1.0.0'
});

server.get('/echo/:name', (req, res, next) => {
  res.send(req.params);
  next();
});

server.listen(config.port, () => {
  logger.info('%s listening at %s', server.name, server.url);
});