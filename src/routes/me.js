const express = require('express');
const router = express.Router();

const MeController = require('../app/controllers/MeController');

router.get('/stored/words', MeController.storedWords);

router.get('/sign-in', MeController.signIn);

router.get('/sign-up', MeController.signUp);

router.post('/logout', MeController.logout);

router.post('/sign-in', MeController.login);

router.post('/register', MeController.create);

router.post('/:wordId', MeController.addWord);

module.exports = router;
