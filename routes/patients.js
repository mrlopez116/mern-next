const express = require("express");
const router = express.Router(); // Allows us to breakout our routes into modular chucnks
// We will require them back in the server.js file.
// This will allow us to use the patient directory
const db = require("../models");

// All logic for database management and calls are in the helpers seperated by call/functionality
const helpers = require("../helps/patients");

router.route('/')
    .get(helpers.getPatients)
    .post(helpers.createPatients)

router.route('/:patientId')
    .get(helpers.getPatient)
    .put(helpers.updatePatient)
    .delete(helpers.deletePatient)

module.exports = router;
