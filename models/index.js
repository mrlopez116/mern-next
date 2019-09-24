const mongoose = require('mongoose');
mongoose.set('debug', true); // Allows us to see what is happening

// Information to be stored in URL
const MONGO_USERNAME = 'userAdminAnyDB_1';
const MONGO_PASSWORD = 'Namibia2019';
const MONGO_HOSTNAME = '157.245.2.80';
const MONGO_PORT = '27017';
// The database will be created automatically
const MONGO_DB = 'admin';

// Allows us to use Promise syntax to do try and catches.
mongoose.Promise = Promise;

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});;

// This will require the patient.js and create the patient collection.
module.exports.Patient = require("./patient");
