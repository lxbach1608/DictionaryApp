const express = require('express');
const router = express.Router();

const WordController = require('../app/controllers/WordController');

router.use('/:slug', WordController.show);

module.exports = router;
