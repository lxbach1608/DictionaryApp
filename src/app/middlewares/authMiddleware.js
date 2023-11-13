module.exports = function authMiddleware(req, res, next) {
  if (req.session.userSession) {
    res.locals._user = req.session.userSession;

    return next();
  }
  res.redirect('/sign-in');

  return;
};
