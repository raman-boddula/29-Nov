const express = require("express");

const app = express.Router();

const Job = require("../models/company.models")
app.post("", async (req, res) => {
    try {
        const data = await Company.create(req.body);
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.get("", async (req, res) => {
    try {
        const data = await Company.find().lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})

app.get("/:id", async (req, res) => {
    try {
        const data = await Company.findById(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})
app.patch("/:id", async (req, res) => {
    try {
        const data = await Company.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.delete("/:id", async (req, res) => {
    try {
        const data = await Company.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})

module.exports = app;