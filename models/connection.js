require('dotenv').config()
const mongoose = require("mongoose")

const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL)

mongoose.connection
    .on("open", ()=> console.log("CONNECTED TO MONGOOSE"))
    .on("close" , () => console.log("brokedn not connected to mongoose omg"))
    .on("error", (error) => console.log(error))

module.exports = mongoose