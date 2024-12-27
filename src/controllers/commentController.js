import { commentService } from "../services/index.js";

const getAllComments = async (req, res) => {
    try {
        const comments = await commentService.getAllComments();
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getComment = async (req, res) => {
    try {
        const comment = await commentService.getComment(req.params.id);
        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createComment = async (req, res) => {
    try {
        const comment = await commentService.createComment(req.body)
        res.status(201).json(comment)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateComment = async (req, res) => {
    try {
        const comment = await commentService(req.params.id, req.body)
        res.status(200).json(comment)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deleteComment = async (req, res) => {
    try {
      await commentService.deleteComment(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

export default {
    getAllComments,
    getComment,
    createComment,
    updateComment,
    deleteComment
}