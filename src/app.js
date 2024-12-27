import express from "express"
import router from "./routes/routes.js";
import Database from './Database.js';
const app = express();

// Connect Database
new Database()

// Middleware
app.use(express.json())


// Routes
app.use("/api/v1", router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})