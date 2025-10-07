const express = require('express');
const router = express.Router();
const AuthorController = require('../controllers/author');


router.post('/author', AuthorController.create);
router.get('/authors', AuthorController.getAll);
router.get('/author/:id', AuthorController.getOne);
router.put('/author/:id', AuthorController.update);
router.delete('/author/:id', AuthorController.delete);

module.exports = router;