import express from "express"
import { userRouter } from "./routes";
const app = express();

// Middleware
app.use(express.json())


// Routes
app.use("/api/v1/user", userRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})