const Word = require('../models/Word');
const { mongoosesToObjects, mongooseToObject } = require('../util/mongoose');
const { stringToHash } = require('../util/hashing');

module.exports = async function hashWordsMiddleware(req, res, next) {
  if (global.HASHTABLE === undefined) {
    try {
      let words = await Word.find({});

      let hashTable = [];

      words = mongoosesToObjects(words);

      words.forEach(function (word) {
        let hashValue = stringToHash(word.slug);

        hashTable[hashValue] = word;
      });

      global.HASHTABLE = hashTable;
    } catch (e) {
      console.log(e);
    }
  }

  next();
};
