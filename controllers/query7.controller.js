const express = require("express");

const app = express.Router();
const Job = require("../models/jobs.models")

const Company = require("../models/company.models")

//an api to get details of the company.
app.get("", async (req, res) => {
    try {
        const data = await Company.find().lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})



module.exports = app;