const express = require("express");

const app = express.Router();
const Job = require("../models/jobs.models")
app.get("/:id", async (req, res) => {
    try {
        const jobs = await Job.find({ "skill_ids": req.params.id }).populate("city_id").populate("skill_ids").populate("company_id")
        return res.status(201).send(jobs)
     }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})

module.exports = app;