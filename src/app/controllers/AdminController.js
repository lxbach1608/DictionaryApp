const Word = require('../models/Word');
const { mongoosesToObjects, mongooseToObject } = require('../util/mongoose');

class WordController {
  // [GET] /admin/stored-words
  async show(req, res, next) {
    let instance;

    try {
      instance = await Word.find({});

      const words = instance;

      res.render('admin/stored-words', { words: mongoosesToObjects(words) });
    } catch (err) {
      res.status(400).json({ error: "Error: Can't find words" });

      return;
    }
  }

  // [GET] /admin/:id/edit
  async edit(req, res, next) {
    try {
      const id = req.params.id;
      const instance = await Word.findById(id);
      const word = instance;

      res.render('admin/update-word', {
        word: mongooseToObject(word),
      });
    } catch (err) {
      next(err);
    }
  }

  // [PUT] /admin/:id
  async update(req, res, next) {
    try {
      const id = req.params.id;

      const instance = await Word.updateOne({ _id: id }, req.body);

      res.redirect('/admin/stored-words');
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new WordController();
