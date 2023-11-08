const Word = require('../models/Word');
const { mongoosesToObjects, mongooseToObject } = require('../util/mongoose');

class WordController {
  // [GET] /word/:slug
  async show(req, res, next) {
    try {
      const instance = await Word.findOne({ slug: req.params.slug });
      const word = instance;

      res.render('word/show', {
        word: mongooseToObject(word),
      });
    } catch (err) {
      next(err);
    }
  }

  // [GET] /word/create
  create(req, res, next) {
    res.render('word/create');
  }

  // [POST] /word/store
  store(req, res, next) {
    const formData = req.body;

    const newWord = new Word(formData);
    newWord.save();

    res.redirect('/home');
  }
}

module.exports = new WordController();
