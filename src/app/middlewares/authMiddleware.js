module.exports = function authMiddleware(req, res, next) {
  res.locals._auth = {
    userValid: false,
  };

  try {
    res.locals._auth.userValid = req.session.user.id ? true : false;
    console.log(req.session.user.id);
    console.log(res.locals._auth.userValid);
  } catch (e) {
    console.log(res.locals._auth.userValid);
  }

  next();
};
