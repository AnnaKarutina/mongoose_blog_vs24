const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/article');

// Create a new article
router.post('/article', ArticleController.create);
router.get('/articles', ArticleController.getAll);
router.get('/article/:id', ArticleController.getOne);
router.put('/article/:id', ArticleController.update);
router.delete('/article/:id', ArticleController.delete);

router.post('/article/:id/comment', ArticleController.addCommentToArticle);   

module.exports = router;