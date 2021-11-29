///finding jobs by city  &skill
const express = require("express");

const Job = require("../models/jobs.models")
const app = express.Router();
app.get("/:id/:skill", async (req, res) => {
    try {
        const jobs = await Job.find({ "city_id": req.params.id ,"skill_ids":req.params.skill}).populate("city_id").populate("skill_ids").populate("company_id")
        return res.status(201).send(jobs)
     }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})

module.exports = app;