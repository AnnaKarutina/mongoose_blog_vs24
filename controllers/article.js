const Article = require('../models/article');

class ArticleController {
    async create(req, res) {
        const newArticle = new Article({
            header: req.body.header,
            content: req.body.content
        })
        try {
            const article = await newArticle.save();
            return res.status(201).json(article);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const articles = await Article.find();
            return res.status(200).json(articles);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const article = await Article.findById(req.params.id);
            return res.status(200).json(article);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(200).json(updatedArticle);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async delete(req, res) {
        try {
            await Article.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: 'Article deleted' });
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }    
}

module.exports = new ArticleController();