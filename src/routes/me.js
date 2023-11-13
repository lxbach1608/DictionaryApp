const express = require('express');
const router = express.Router();

const MeController = require('../app/controllers/MeController');

router.get('/stored/words', MeController.storedWords);

router.post('/logout', MeController.logout);

router.post('/:wordId', MeController.addWord);

module.exports = router;
