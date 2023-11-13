const Word = require('../models/Word');
const User = require('../models/User');
const User_Word = require('../models/User_Word');
const { mongoosesToObjects, mongooseToObject } = require('../util/mongoose');

class MeController {
  // [GET] /me/stored/words
  async storedWords(req, res, next) {
    try {
      const userId = req.session.user.id;
    } catch (e) {
      console.log(e);
    }
    try {
      const user_words = await User_Word.find({ userId });

      res.render('me/stored-words', {
        user_words: mongoosesToObjects(user_words),
      });
    } catch (err) {
      res.status(400).json({ error: "Error: Can't find words" });

      next(err);
    }
  }

  // [GET] /me/sign-in
  signIn(req, res, next) {
    res.render('me/sign-in');
  }

  // [GET] /me/sign-up
  signUp(req, res, next) {
    res.render('me/sign-up');
  }

  // [POST] /me/sign-in
  async login(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.exists({
      username,
      password,
    });

    if (!user) {
      res.render('me/sign-in', {
        invalidMessage: 'Username or password are wrong !!',
      });

      return;
    }

    req.session.user = {
      id: user._id,
    };

    res.redirect('/home');
  }

  // [POST] /me/sign-up
  create(req, res, next) {
    const formData = req.body;

    const newUser = new User(formData);
    newUser.save();

    res.redirect('/home');
  }

  //[POST] /me/logout
  logout(req, res, next) {
    req.session.destroy((err) => {
      res.render('home');
    });
  }

  //[POST] /me/:wordId
  async addWord(req, res, next) {
    const userId = req.session.user.id;
    const wordId = req.params.wordId;

    let word = await Word.findOne({ _id: wordId });
    word = mongooseToObject(word);

    console.log(word.word);

    const instance = new User_Word({ userId, word: word.word });
    instance.save();

    res.redirect('/me/stored-words');
  }
}

module.exports = new MeController();
