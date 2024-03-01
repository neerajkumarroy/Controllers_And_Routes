require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect(process.env.DB_URL, {
        // useNewUrlParser: true
        // useUnifiedTopology: true
    }).then(() => {
        console.log("DB connect successFully.....");
    }).catch((error) => {
        console.log(error);
    });
};
module.exports = connectDB;
