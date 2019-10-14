// Purpose of file: House all functions need for the Patients Collection.

// Connect to the database.
const db = require("../models");

// Get ALL the patients from the Patients collection
exports.getPatients = (req, res) => {
    // Mongoose function to grab all patients in patients collection.
    db.Patient.find()
        .then(function (patients) {
            res.json(patients);
        })
        .catch(function (err) {
            res.send(err);
        });
}

// Create a new single patient.
exports.createPatient = (req, res) => {
    // Using mongoose functions to create patient using the parameter `req` (request) that house new patient information.
    db.Patient.create(req.body)
        .then(function (newPatient) {
            // 201 code is something was created.
            res.status(201).json(newPatient);
        })
        .catch(function (err) {
            res.send(err);
        });
}

// Get a single patient information
exports.getPatient = (req, res) => {
    // Grab the `patientId` from the request params.
    const patientId = req.params.patientId;
    // Mongoose function to find specific patient.
    db.Patient.findById(patientId)
        .then(function (foundPatient) {
            res.json(foundPatient);
        })
        .catch(function (err) {
            res.send(err);
        });
}

// Update a specific patient.
exports.updatePatient = (req, res) => {
    // Grab the `patientId` from the request params.
    const patientId = req.params.patientId;
    // Mongoose function to find specific patient and update their information.
    db.Patient.findOneAndUpdate({ _id: patientId }, req.body, { new: true }) //Responsed with the new patient data
        .then(function (patient) {
            res.json(patient)
        })
        .catch(function (err) {
            res.send(err);
        });
}

// Delete a specific patient.
exports.deletePatient = (req, res) => {
    const patientId = req.params.patientId;
    db.Patient.remove(patientId)
        .then(function () {
            res.json({ message: 'Patient deleted' }); // Sends message if patient is deleted.
        })
        .catch(function (err) {
            res.send(err);
        })
}

module.exports = exports;
