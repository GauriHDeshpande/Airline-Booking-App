const mongoose = required("mongoose");

const bookingSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    flight:{
        type:mongoose.Schema.ObjectId,
        required: true,
        ref: "Flight"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status:{  // booked, cancel, in-process;
        type: String,
        required: true,
        default: "In Process",
        enum: ["booked", "cancel", "In-Process"]
    }
}, {timestamps: true});

const bookingModel = new mongoose.model("Booking", bookingSchema);

module.exports = bookingModel;