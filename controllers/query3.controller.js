
//find all the jobs that are available as Work from home.

const express = require("express");
const Job = require("../models/jobs.models")

const app = express.Router();
app.get("/:id", async (req, res) => {
    try {
        const jobs = await Job.find({ "remote_id": req.params.id }).populate("city_id").populate("skill_ids").populate("company_id").populate("remote_id").lean().exec();
        return res.status(201).send(jobs)
     }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
module.exports = app;