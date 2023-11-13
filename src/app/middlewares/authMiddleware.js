function validUser(userId) {}

module.exports = function authMiddleware(req, res, next) {
  res.json('There no permission to go here !!!! please go away =)))');
  return;

  next();
};
