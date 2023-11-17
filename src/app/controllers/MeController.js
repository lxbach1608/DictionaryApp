const Word = require('../models/Word');

const User_Word = require('../models/User_Word');
const { mongoosesToObjects, mongooseToObject } = require('../util/mongoose');

class MeController {
  // [GET] /me/stored/words
  async storedWords(req, res, next) {
    try {
      const userId = req.session.user.id;

      const user_words = await User_Word.find({ userId });

      res.render('me/stored-words', {
        user_words: mongoosesToObjects(user_words),
      });
    } catch (err) {
      res.status(400).json({ error: "Error: Can't find words" });

      next(err);
    }
  }

  //[POST] /me/:wordId
  async addWord(req, res, next) {
    const userId = req.session.user.id;
    const wordId = req.params.wordId;

    let user_words = await User_Word.find({ userId, wordId });

    if (user_words.length == 0) {
      let word = await Word.findOne({ _id: wordId });

      word = mongooseToObject(word);

      const instance = new User_Word({ userId, wordId, word: word.word });
      instance.save();
    }

    res.redirect('/me/stored/words');
  }
}

module.exports = new MeController();
