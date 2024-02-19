const express = require("express");
const router = express.Router();
const { getAllProducts, testingAllProducts } = require("../controllers/products.js");

router.route("/").get(getAllProducts); 
router.route("/testing").get(testingAllProducts); 

module.exports = router;
