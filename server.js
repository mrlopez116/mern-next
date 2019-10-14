const express = require("express");
const mongoose = require("mongoose");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');

var patientRoutes = require("./routes/patients");

app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.use('/', (req, res) => {
        res.send('boom');
    });

    // Setting the internal API beginning URL
    server.use('/api/patients', patientRoutes);

    server.get('/a/patients', (req, res) => {
        res.send("helllooo");
    });
    server.get("*", (req, res) => {
        return handle(req, res);
    })

    server.listen(3001, err => {
        if (err) {
            console.log(`Something went wrong: ${err}`);
        } else {
            console.log("> Now serving on localhost:3001");
        }
    });
});