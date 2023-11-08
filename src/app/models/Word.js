const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Word = new Schema({
  word: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAd: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Word', Word);
