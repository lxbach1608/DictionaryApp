const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const User_Word = new Schema({
  userId: ObjectId,
  word: String,
});

module.exports = mongoose.model('User_Word', User_Word);
