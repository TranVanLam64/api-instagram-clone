import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/instagram";

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => console.log("Connected to MongoDB"))
            .catch((err) => console.log("Error connecting to MongoDB:", err));
    }
}

export default Database;
