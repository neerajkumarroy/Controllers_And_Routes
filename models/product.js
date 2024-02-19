const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:false, // Making name not required
    },
    price:{
        type:Number,
        required:false,
    },
    featured:{
        type:Boolean,
        default:true,
    },
    rating:{
        type:Number,
        required:false,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:["apple", "samsung", "dell", "mi"],
        message:`{VALUE} is not supported.....?`
    },
});

module.exports = mongoose.model("products", productSchema);
