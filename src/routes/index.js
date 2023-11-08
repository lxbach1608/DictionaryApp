const wordRouter = require('./word');
const siteRouter = require('./site');

function route(app) {
  app.use('/word', wordRouter);
  app.use('/', siteRouter);
}

module.exports = route;
