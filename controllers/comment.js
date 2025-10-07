const Comment = require('../models/comment');

class CommentController {
    async create(req, res) {
        const newComment = new Comment({
            date: new Date(),
            content: req.body.content,
            article: req.body.article
        })
        try {
            const comment = await newComment.save();
            return res.status(201).json(comment);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const comments = await Comment.find().populate('article');
            return res.status(200).json(comments);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const comment = await Comment.findById(req.params.id);
            return res.status(200).json(comment);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const deletedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(200).json(deletedComment);
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }

    async delete(req, res) {
        try {
            await Comment.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: 'Comment deleted' });
        } catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    }    
}

module.exports = new CommentController();