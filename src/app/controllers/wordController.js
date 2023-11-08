class wordController {
  // [GET] /
  index(req, res) {
    res.render('test');
  }
}

module.exports = new wordController();
