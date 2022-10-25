const Review = require("../models/review");

const createReview = async (data) =>{
    try {
        const newReview = {
            user: data.userId,
            comment: data.comment,
            flight: data.flightId
        }
        const response = await new Review(newReview).save();
        return response;
    } catch (error) {
        console.log(error)
    }
};

const destroyReview = async(id) => {
    try {
        const response = await Review.findByIdAndDelete(id);
        // console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
};

const getReview = async(user, flight) => {
    try {
        const response = await Review.findOne({user: user, flight: flight});
        return response;
    } catch (error) {
        console.log(error);
    }
}

const getAllReviews = async(flight) => {
    try {
        const response = await Review.find({flight: flight});
        return response;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createReview,
    destroyReview,
    getReview,
    getAllReviews
};