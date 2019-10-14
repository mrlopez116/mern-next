// Purpose of file: Will set up all the routes for the API

// Using express to do all the routing.
const express = require("express");
// The below code allows us to breakout our routes into modular chucnks
// We will require them back in the server.js file.
// This will allow us to use the patient directory
const router = express.Router();


// All logic for database management and calls are in the helpers seperated by call/functionality
const helpers = require("../helpers/patients");

// Technically this is the route '/api/patients/'
router.route('/')
    .get(helpers.getPatients)
    .post(helpers.createPatient)

// Technically this is the route '/api/patients/:patientId'
router.route('/:patientId')
    .get(helpers.getPatient)
    .put(helpers.updatePatient)
    .delete(helpers.deletePatient)

module.exports = router;
