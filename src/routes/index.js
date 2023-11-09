const wordRouter = require('./word');
const siteRouter = require('./site');
const adminRouter = require('./admin');

function route(app) {
  app.use('/admin', adminRouter);
  app.use('/word', wordRouter);
  app.use('/', siteRouter);
}

module.exports = route;
