import { postService } from "../services/index.js";

const getAllPosts = async (req, res) => {
    try {
        const posts = await postService.getAllPosts();
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getPost = async (req, res) => {
    try {
        const post = await postService.getPost(req.params.id);
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createPost = async (req, res) => {
    try {
        const post = await postService.createPost(req.body)
        res.status(201).json(post)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updatePost = async (req, res) => {
    try {
        const post = await postService(req.params.id, req.body)
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deletePost = async (req, res) => {
    try {
      await postService.deletePost(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

export default {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}