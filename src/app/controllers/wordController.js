const Word = require('../models/Word');
const { mongoosesToObjects, mongooseToObject } = require('../util/mongoose');

class WordController {
  // [GET] /:slug
  async show(req, res) {
    try {
      const instance = await Word.findOne({ slug: req.params.slug });
      const word = instance;

      res.render('word/show', {
        word: mongooseToObject(word),
      });
    } catch (err) {}
  }
}

module.exports = new WordController();
