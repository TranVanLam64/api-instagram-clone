import { Comment } from "../models/index.js"
import userService from "./userService.js"
import postService from "./postService.js"

const getAllComments = async () => {
    return await Comment.find()
}

const getComment = async (id) => {
    return await Comment.findById(id)
}

const createComment = async (commentData) => {
    const { userId, postId } = commentData

    if(!userId) {
        throw new Error("User ID is required");
    }
    if(!postId) {
        throw new Error("Post ID is required");
    } 
    const user = await userService.getUser(userId);
    const post = await postService.getPost(postId)
    if (!user) {
        throw new Error("User not found");
    }
    if (!post) {
        throw new Error("Post not found");
    }
    const comment = new Comment(commentData)
    const savedComment = await comment.save()
    post.comments.push(savedComment._id)
    await post.save()

    return savedComment
}

const updateComment = async (id, commentData) => {
    return await Comment.findByIdAndUpdate(id, commentData, { new: true })
}

const deleteComment = async (id) => {
    return await Comment.findByIdAndDelete(id)
}

export default {
    getAllComments,
    getComment,
    createComment,
    updateComment,
    deleteComment
}