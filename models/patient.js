// Purpose of file: Set up Schema for patients.

// Require mongoose in order to create Schema
const mongoose = require('mongoose');
// This is the patient schema for the database
var patientSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: 'First name cannot be blank!'
    },
    last_name: {
        type: String,
        required: 'Last name cannot be blank!'
    },
    title: {
        type: String,
        required: 'Title cannot be blank'
    },
    phone_number: {
        type: String,
        required: 'Phone Number cannot be blank'
    },
    email: {
        type: String,
        required: 'Email cannot be blank'
    },
    date_added: {
        type: Date,
        default: Date.now
    }
});

// Create the schema. This will autommatically create a patients collection. This will automaticlaly pluarize the name.
var Patient = mongoose.model('Paitent', patientSchema);

// When file is required we send out Patient
module.exports = Patient;