import mongoose from "mongoose"

const uri = ""

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(uri, {
        })
            .then(() => console.log("Connected mongoDB"))
            .catch((err) => console.log("Something error when connect mongoDB", err))
    }
}

module.exports = new Database()

