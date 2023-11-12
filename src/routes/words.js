const express = require('express');
const router = express.Router();

const WordController = require('../app/controllers/WordController');

router.get('/create', WordController.create);

router.get('/:id/edit', WordController.edit);

router.get('/:slug', WordController.show);

router.post('/create', WordController.store);

router.put('/:id', WordController.update);

router.delete('/:id', WordController.destroy);

module.exports = router;
