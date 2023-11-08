const Word = require('../models/Word');

class siteController {
  // [GET] path: "/"
  index(req, res) {
    res.json({
      value: 'test',
    });
  }
}

module.exports = new siteController();
