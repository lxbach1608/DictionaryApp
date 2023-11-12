const Word = require('../models/Word');
const { mongoosesToObjects, mongooseToObject } = require('../util/mongoose');

class WordController {
  // [GET] /admin/stored/words
  async storedWords(req, res, next) {
    try {
      const instance = await Word.find({});
      const words = instance;
      res.render('admin/stored-words', { words: mongoosesToObjects(words) });
    } catch (err) {
      res.status(400).json({ error: "Error: Can't find words" });
      return;
    }
  }
}

module.exports = new WordController();
