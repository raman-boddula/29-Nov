//low to high
const express = require("express");

const app = express.Router();
app.get("", async (req, res) => {
    try {
        const jobs = await Job.find().sort({"rating_id": -1}).populate("rating_id").populate("city_id").populate("skill_ids").populate("company_id").populate("remote_id").lean().exec();
        return res.status(201).send(jobs)
     }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
module.exports = app;