const Word = require('../models/Word');
const User = require('../models/User');

const { mongoosesToObjects, mongooseToObject } = require('../util/mongoose');

class SiteController {
  // [GET] /
  async index(req, res) {
    try {
      let words = await Word.find({});

      words = mongoosesToObjects(words);

      res.render('home', { words });
    } catch (err) {
      res.status(400).json({ error: "Error: Can't find word" });

      return;
    }
  }

  // [GET] /sign-in
  signIn(req, res, next) {
    res.render('sign-in');
  }

  // [GET] /sign-up
  signUp(req, res, next) {
    res.render('sign-up');
  }

  // [POST] /sign-up
  register(req, res, next) {
    const formData = req.body;

    const newUser = new User(formData);
    newUser.save();

    res.redirect('/home');
  }

  // [POST] /sign-in
  async login(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
      username,
      password,
    });

    if (!user) {
      res.render('sign-in', {
        invalidMessage: 'Username or password are wrong !!',
      });

      return;
    }

    // add user id to session /util
    req.session.userSession = {
      id: user._id,
      isAdmin: user.isAdmin,
    };

    res.redirect('/home');
  }

  //[POST] /me/logout
  logout(req, res, next) {
    req.session.destroy((err) => {
      res.render('home');
    });
  }
}

module.exports = new SiteController();
