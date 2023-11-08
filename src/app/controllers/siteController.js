const Word = require('../models/Word');
const { mongoosesToObjects, mongooseToObject } = require('../util/mongoose');

class siteController {
  // [GET] path: "/"
  async index(req, res) {
    let instance;
    try {
      instance = await Word.find({});

      const words = instance;

      res.render('home', { words: mongoosesToObjects(words) });
    } catch (err) {
      res.status(400).json({ error: "Error: Can't find word" });

      return;
    }
  }
}

module.exports = new siteController();
