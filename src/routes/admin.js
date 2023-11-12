const express = require('express');
const router = express.Router();

const AdminController = require('../app/controllers/AdminController');

router.get('/stored/words', AdminController.storedWords);

module.exports = router;
