const Word = require('../models/Word');
const { mongoosesToObjects, mongooseToObject } = require('../util/mongoose');

class MeController {
  // [GET] /me/stored/words
  async storedWords(req, res, next) {
    try {
      const instance = await Word.find({});

      const words = instance;

      res.render('me/stored-words', { words: mongoosesToObjects(words) });
    } catch (err) {
      res.status(400).json({ error: "Error: Can't find words" });

      next(err);
    }
  }
}

module.exports = new MeController();
