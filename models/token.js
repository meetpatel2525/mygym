const mongoose = require("mongoose");
const Schema = mongoose.Schema
const tokenSchema = new Schema({

    userEmail: {
        type: String,
    },
    token:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now(), expires:3600
    }
})

module.exports = mongoose.model("Token",tokenSchema)