const product = require("../models/product");

const getAllProducts = async (req, resp) => {

    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};
    if (company) {
        queryObject.company = company;
    }
    if (featured) {
        queryObject.featured = featured;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }
    //This is Shorting Funcationality
    let apiData = product.find(queryObject);

    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    // console.log(queryObject);

    //This is the select funcationality which fild provide by the user
    if (select) {
        // let selectFex = select.replace(","," ");
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    //PagiNation 
    //page = 2
    //limit = 3
    //skip = 1 * 3 = 3
    //apiData = apiData.skip(3).limit(3);
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1) * limit;
    apiData = apiData.skip(skip).limit(limit);

    const products = await apiData;
    resp.status(200).json({ products, nbHits: products.length });
};

const testingAllProducts = async (req, resp) => {
    const MyData = await product.find(req.query).skip(2);
    resp.status(200).json(MyData);
};

module.exports = { getAllProducts, testingAllProducts };
