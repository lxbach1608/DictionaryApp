const express = require('express');
const router = express.Router();

const WordController = require('../app/controllers/WordController');

router.get('/create', WordController.create);
router.post('/create', WordController.store);

router.get('/:slug', WordController.show);

module.exports = router;
