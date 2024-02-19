require("dotenv").config();
const connectDB = require("./DB/config.js")
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const products_route = require("./routes/products.js")

app.get("/", (req, resp) => {
    resp.json({ message: "This is Test API" });
});

//Middleware to set route
app.use("/api",products_route)

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`App is running on the port number ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();