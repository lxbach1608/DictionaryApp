const express = require('express');
const router = express.Router();
const hashingMiddleware = require('../app/middlewares/hashingMiddleware');

const SiteController = require('../app/controllers/SiteController');

router.use('/', hashingMiddleware, SiteController.index);

module.exports = router;
