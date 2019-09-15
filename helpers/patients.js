const db = require("../models");

exports.getPatients = (req, res) => {
    db.Patient.find()
        .then(function (patients) {
            res.json(patients);
        })
        .catch(function (err) {
            res.send(err);
        });
}
exports.createPatient = (req, res) => {
    db.Patient.create(req.body)
        .them(function (newPatient) {
            // 201 code is something was created.
            res.status(201).json(newPatient);
        })
        .catch(function (err) {
            res.send(err);
        })
}

exports.getPatient = (req, res) => {
    const patientId = req.params.patientId;
    db.Patient.findById(patientId)
        .then(function (foundPatient) {
            res.json(foundPatient);
        })
        .catch(function (err) {
            res.send(err);
        })
}

exports.updatePatient = (req, res) => {
    const patientId = req.params.patientId;
    db.Todo.findOneAndUpdate({ _id: patientId }, req.body, { new: true }) //Responsed with the new patient data
        .then(function (patient) {
            res.json(patient)
        })
        .catch(function (err) {
            res.send(err);
        })
}

exports.deletePatient = (req, res) => {
    const patientId = req.params.patientId;
    db.Patient.remove(patientId)
        .then(function () {
            res.json({ message: 'Patient deleted' });
        })
        .catch(function (err) {
            res.send(err);
        })
}

module.exports = router;
