const Word = require('../models/Word');
const { mongoosesToObjects, mongooseToObject } = require('../util/mongoose');
const { stringToHash } = require('../util/hashing');

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
}

module.exports = new SiteController();
