const express = require("express");

const app = express.Router();

const Remote = require("../models/remote.models")


app.post("/remote", async (req, res) => {
    try {
        const data = await Remote.create(req.body);
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.get("/remote", async (req, res) => {
    try {
        const data = await Remote.find().lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})

app.get("/remote/:id", async (req, res) => {
    try {
        const data = await Remote.findById(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})
app.patch("/remote/:id", async (req, res) => {
    try {
        const data = await Remote.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.delete("/remote/:id", async (req, res) => {
    try {
        const data = await Remote.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
module.exports = app;
