const Word = require('../models/Word');
const { mongoosesToObjects, mongooseToObject } = require('../util/mongoose');
const { findWordByHashTable } = require('../util/hashing');

class WordController {
  // [GET] /words
  async apiWords(req, res) {
    try {
      let words = await Word.find({});

      words = mongoosesToObjects(words);

      res.json(words);
    } catch (err) {
      res.status(400).json({ error: "Error: Can't find word" });

      return;
    }
  }
}

module.exports = new WordController();
