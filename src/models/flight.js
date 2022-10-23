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
    departureTime:{
        type: timestamp
    },
    arivalTime:{
        type: timestamp
    },
    flightNumber:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
}, {timestamps: true});

const flightModel = new mongoose.model("Flight", flightSchema);

module.exports = flightModel;