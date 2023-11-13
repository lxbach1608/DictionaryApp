const express = require('express');
const router = express.Router();
const hashingMiddleware = require('../app/middlewares/hashingMiddleware');

const SiteController = require('../app/controllers/SiteController');

router.get('/sign-in', SiteController.signIn);

router.get('/sign-up', SiteController.signUp);

router.post('/login', SiteController.login);

router.post('/register', SiteController.register);

router.use('/', hashingMiddleware, SiteController.index);

module.exports = router;
