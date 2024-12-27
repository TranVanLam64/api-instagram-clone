import express from "express"
import { postController } from "../controllers/index.js"

const router = express.Router()

router.get("/", postController.getAllPosts);
router.get('/:id', postController.getPost);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

export default router