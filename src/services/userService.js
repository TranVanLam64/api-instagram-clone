import { User } from "../models/index.js"

const getAllUsers = async () => {
    return await User.find()
}

const getUser = async (id) => {
    const user = await User.findById(id);
    return user || null;
}

const createUser = async (userData) => {
    const user = new User(userData)
    return await user.save()
}

const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true })
}

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id)
}

export default {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}