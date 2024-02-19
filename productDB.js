require("dotenv").config();
const connectDB = require("./DB/config");
const productJson = require("./products.json");
const product = require("./models/product.js")

const start = async () => {
    await connectDB(process.env.MONGODB_URL);
    await product.deleteMany(); //Delete All the Data into the DataBase
    await product.create(productJson);
};

start();