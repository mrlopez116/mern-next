// Purpose for file: This file is where the connection with MongoDB and the App takes place.

const mongoose = require('mongoose');
const mongoConfig = require("../config/mongodb_config"); // This is the file that contains credential information.
mongoose.set('debug', true); // Allows us to see what is happening in console

// Set the variables for connect to MongoDB
const MONGO_USERNAME = mongoConfig.MONGO_USERNAME;
const MONGO_PASSWORD = mongoConfig.MONGO_PASSWORD;
const MONGO_HOSTNAME = mongoConfig.MONGO_HOSTNAME;
const MONGO_PORT = mongoConfig.MONGO_PORT;
const MONGO_DB = mongoConfig.MONGO_DB; // The database will be created automatically

// Allows us to use Promise syntax to do try and catches.
mongoose.Promise = Promise;

// URL to connect to the database
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
// Connect to the databse, and return a message if able
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});;

// This will require the patient.js and create the patient collection.
module.exports.Patient = require("./patient");
