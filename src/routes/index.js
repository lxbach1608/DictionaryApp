const wordRouter = require('./words');
const siteRouter = require('./site');
const adminRouter = require('./admin');
const meRouter = require('./me');

function route(app) {
  app.use('/admin', adminRouter);
  app.use('/me', meRouter);
  app.use('/words', wordRouter);
  app.use('/', siteRouter);
}

module.exports = route;
