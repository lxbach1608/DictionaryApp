module.exports = function authMiddleware(req, res, next) {
  console.log({ user: req.session.user });

  if (req.session.user) {
    res.locals._user = req.session.user;

    return next();
  }
  res.render('sign-in');

  return;
};
