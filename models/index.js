const mongoose = require('mongoose');
mongoose.set('debug', true); // Allows us to see what is happening

// Information to be stored in URL
const MONGO_USERNAME = 'sammy';
const MONGO_PASSWORD = 'your_password';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'sharkinfo';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose.connect(url, { useNewUrlParser: true });

// Allows us to use Promise syntax to do try and catches.
mongoose.Promise = Promise;

// This will require the patient.js and create the patient collection.
module.exports.Patient = require("./patient");
