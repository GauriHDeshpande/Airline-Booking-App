const Airline = require("../models/flight");

const createAirline = async (data) =>{
    try {
        const newAirline = {
            name: data.name,
            website: data.website
        }
        const response = await new Airline(newAirline).save();
        return response;
    } catch (error) {
        console.log(error)
    }
};

const destroyAirline = async(name) => {
    try {
        const response = await Airline.findOneAndDelete({name: name});
        return response;
    } catch (error) {
        console.log(error);
    }
};

const getAirline = async(name) => {
    try {
        const response = await Airline.findOne({name: name});
        return response;
    } catch (error) {
        console.log(error);
    }
}

const getAllAirlines = async(name) => {
    try {
        const response = await Airline.find({name: name});
        return response;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createAirline,
    destroyAirline,
    getAirline,
    getAllAirlines
};

