const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/comment');

// Create a new article
router.post('/comment', CommentController.create);
router.get('/comments', CommentController.getAll);
router.get('/comment/:id', CommentController.getOne);
router.put('/comment/:id', CommentController.update);
router.delete('/comment/:id', CommentController.delete);

module.exports = router;