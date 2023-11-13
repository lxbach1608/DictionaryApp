const Word = require('../models/Word');
const { mongoosesToObjects, mongooseToObject } = require('../util/mongoose');

class WordController {
  // [GET] /admin/stored/words
  async storedWords(req, res, next) {
    try {
      const words = await Word.find({});

      res.render('admin/stored-words', { words: mongoosesToObjects(words) });
    } catch (err) {
      res.status(400).json({ error: "Error: Can't find words" });

      return;
    }
  }
}

module.exports = new WordController();
