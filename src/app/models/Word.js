const mongoose = require('mongoose');

var slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Word = new Schema(
  {
    word: { type: String },
    partOfSpeed: { type: String },
    phonetic: { type: String },
    definition: { type: String },
    example: { type: String },
    slug: { type: String, slug: 'word', unique: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Word', Word);
