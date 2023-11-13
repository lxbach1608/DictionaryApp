const wordRouter = require('./words');
const siteRouter = require('./site');
const adminRouter = require('./admin');
const meRouter = require('./me');

const hashingMiddleware = require('../app/middlewares/hashingMiddleware');

function route(app) {
  app.use('/admin', adminRouter);
  app.use('/me', meRouter);
  app.use('/words', hashingMiddleware, wordRouter);
  app.use('/', siteRouter);
}

module.exports = route;
