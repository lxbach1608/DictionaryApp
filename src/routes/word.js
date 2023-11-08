const express = require('express');
const router = express.Router();

const wordController = require('../app/controllers/wordController');

router.use('/', wordController.index);

module.exports = router;
