const wordRouter = require('./words');
const siteRouter = require('./site');
const adminRouter = require('./admin');
const meRouter = require('./me');
const apiRouter = require('./api');

const authMiddleware = require('../app/middlewares/authMiddleware');
const hashingMiddleware = require('../app/middlewares/hashingMiddleware');

function route(app) {
  app.use('/admin', authMiddleware, adminRouter);
  app.use('/me', authMiddleware, meRouter);
  app.use('/words', authMiddleware, wordRouter);
  app.use('/api', apiRouter);
  app.use('/', siteRouter);
}

module.exports = route;
