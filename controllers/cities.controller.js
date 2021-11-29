const express = require("express");

const app = express.Router();

const City = require("../models/cities.models")

app.post("", async (req, res) => {
    try {
        const data = await City.create(req.body);
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.get("", async (req, res) => {
    try {
        const data = await City.find().lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})

app.get("/:id", async (req, res) => {
    try {
        const data = await City.findById(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})
app.patch("/:id", async (req, res) => {
    try {
        const data = await City.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.delete("/:id", async (req, res) => {
    try {
        const data = await City.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})

module.exports = app;