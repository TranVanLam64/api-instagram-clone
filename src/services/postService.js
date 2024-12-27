import { Post } from "../models/index.js"
import userService from "./userService.js"

const getAllPosts = async () => {
    return await Post.find()
}

const getPost = async (id) => {
    return await Post.findById(id)
}

const createPost = async (postData) => {
    const userId = postData.userId

    if(!userId) {
        throw new Error("User ID is required");
    } 

    const user = await userService.getUser(userId);
    if (!user) {
        throw new Error("User not found");
    }
    const post = new Post(postData);
    const savedPost = await post.save()
    user.posts.push(savedPost._id)
    await user.save()
        
    return savedPost;
}

const updatePost = async (id, postData) => {
    return await Post.findByIdAndUpdate(id, postData, { new: true })
}

const deletePost = async (id) => {
    return await Post.findByIdAndDelete(id)
}

export default {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}