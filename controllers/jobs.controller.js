const express = require("express");

const app = express.Router();

const Job = require("../models/jobs.models")
app.post("", async (req, res) => {
    try {
        const data = await Job.create(req.body);
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.get("", async (req, res) => {
    try {
        const data = await Job.find().populate("company_id").populate("skill_ids").populate("city_id").populate("remote_id").populate("rating_id").lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})

app.get("/:id", async (req, res) => {
    try {
        const data = await Job.findById(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})
app.patch("/:id", async (req, res) => {
    try {
        const data = await Job.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.delete("/:id", async (req, res) => {
    try {
        const data = await Job.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})

module.exports = app;