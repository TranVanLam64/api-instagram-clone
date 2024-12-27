import express from "express"
import userRouter from "./userRoute.js"
import postRouter from "./postRoute.js"
import commentRouter from "./commentRoute.js"

const router = express.Router()


router.use("/user", userRouter)
router.use("/post", postRouter)
router.use("/comment", commentRouter)

export default router