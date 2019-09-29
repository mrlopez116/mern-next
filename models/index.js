const mongoose = require('mongoose');
const mongoConfig = require("../config/mongodb_config");
mongoose.set('debug', true); // Allows us to see what is happening

// // Information to be stored in URL
// const MONGO_USERNAME = 'userAdminAnyDB_1';
// const MONGO_PASSWORD = 'Namibia2019';
// const MONGO_HOSTNAME = '157.245.2.80';
// const MONGO_PORT = '27017';
// // The database will be created automatically
// const MONGO_DB = 'namibia-emr';
const MONGO_USERNAME = mongoConfig.MONGO_USERNAME;
const MONGO_PASSWORD = mongoConfig.MONGO_PASSWORD;
const MONGO_HOSTNAME = mongoConfig.MONGO_HOSTNAME;
const MONGO_PORT = mongoConfig.MONGO_PORT;
// The database will be created automatically
const MONGO_DB = mongoConfig.MONGO_DB;

console.log(MONGO_DB, MONGO_HOSTNAME, MONGO_PASSWORD, MONGO_PORT, MONGO_USERNAME);

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
