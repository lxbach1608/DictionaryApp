const express = require('express');
const router = express.Router();

const ApiController = require('../app/controllers/ApiController');

router.get('/words', ApiController.apiWords);

module.exports = router;
