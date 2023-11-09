const express = require('express');
const router = express.Router();

const AdminController = require('../app/controllers/AdminController');

router.get('/stored-words', AdminController.show);

router.put('/:id', AdminController.update);

router.get('/:id/edit', AdminController.edit);

module.exports = router;
