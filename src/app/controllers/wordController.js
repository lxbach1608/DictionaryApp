const Word = require('../models/Word');
const { mongoosesToObjects, mongooseToObject } = require('../util/mongoose');
const { findWordByHashTable } = require('../util/hashing');

class WordController {
  // [GET] /words/:slug
  async show(req, res, next) {
    try {
      const slug = req.params.slug;

      const hashTable = global.HASHTABLE;

      const word = findWordByHashTable(slug, hashTable);

      if (word) {
        res.render('words/show', {
          word,
        });
      } else {
        res.json('Word does not exist');
      }
    } catch (err) {
      next(err);
    }
  }

  // [GET] /words/create
  create(req, res, next) {
    res.render('words/create');
  }

  // [GET] /words/:id/edit
  async edit(req, res, next) {
    try {
      const id = req.params.id;
      const instance = await Word.findById(id);
      const word = instance;

      res.render('words/edit', {
        word: mongooseToObject(word),
      });
    } catch (err) {
      next(err);
    }
  }

  // [POST] /words/create
  store(req, res, next) {
    const formData = req.body;

    const newWord = new Word(formData);
    newWord.save();

    res.redirect('/home');
  }

  // [PUT] /words/:id
  async update(req, res, next) {
    try {
      const id = req.params.id;

      const instance = await Word.updateOne({ _id: id }, req.body);

      res.redirect('back');
    } catch (err) {
      next(err);
    }
  }

  // [DELETE] /words/:id
  async destroy(req, res, next) {
    try {
      const id = req.params.id;

      await Word.deleteOne({ _id: id });

      res.redirect('back');
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new WordController();
