const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose
      .connect('mongodb://127.0.0.1:27017/dictionary')
      .then(() => console.log('Connected'));
  } catch (error) {
    console.log('Failed to connect');
  }
}

module.exports = { connect };
