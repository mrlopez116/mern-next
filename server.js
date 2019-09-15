const express = require("express");
const mongoose = require("mongoose");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');

var patientRoutes = require("./routes/patients");

app.prepare().than(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ encoded: true }));

    server.get("*", (req, res) => {
        return handle(req, res);
    })

    // Setting the internal API beginning URL
    server.use('/api/patients', patientRoutes);

    server.listen(3000, err => {
        if (err) {
            console.log(`Something went wrong: ${err}`);
        } else {
            console.log("> Now serving on localhost:3000");
        }
    });
});