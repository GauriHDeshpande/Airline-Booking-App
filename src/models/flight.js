const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    departureAirport:{
        type: String,
        required: true
    },
    arivalAirport:{
        type: String,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    airline:{
        type:mongoose.Schema.ObjectId,
        required: true,
        ref: "Airline"
    },
    flightDate:{
        type: Date,
        default: Date.now
    },
    // departureTime:{
    //     type: Number,
    //     defult: (new Date()).getTime()
    // },
    // arivalTime:{
    //     timestamps: true
    // },
    flightNumber:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    boardingGate:{
        type: Number
    }
}, {timestamps: true});

const flightModel = new mongoose.model("Flight", flightSchema);

module.exports = flightModel;