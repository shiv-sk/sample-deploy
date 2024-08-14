const mongoose = require("mongoose");

const conn = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log("database connection is successfull: ");
    } catch (error) {
        console.log("the database connection is not success: " , error);
        process.exit(1);
    }
}

module.exports = conn;