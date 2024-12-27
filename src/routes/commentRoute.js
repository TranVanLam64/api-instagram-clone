import express from "express"
import { commentController } from "../controllers/index.js"

const router = express.Router()

router.get("/", commentController.getAllComments);
router.get('/:id', commentController.getComment);
router.post('/', commentController.createComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);

export default router