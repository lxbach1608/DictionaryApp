const express = require('express');
const router = express.Router();

const AdminController = require('../app/controllers/AdminController');

router.get('/stored-words', AdminController.show);
router.get('/:id/edit', AdminController.edit);

router.put('/:id', AdminController.update);
router.delete('/:id', AdminController.destroy);

module.exports = router;
