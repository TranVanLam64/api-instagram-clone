import mongoose from "mongoose"

const followSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: Number, required: true },
});

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        },
    ],
    followers: [followSchema],
    following: [followSchema],
})

const User = mongoose.model("User", userSchema)

export default User