const mongoose = require("mongoose");

const connect = () =>{
    console.log("mongodb connection requested");
    return mongoose.connect("mongodb://localhost/Air-India-Clone");
}

module.exports = {
    connect
}