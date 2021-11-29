const express = require("express");

const app = express.Router();

const Rating = require("../models/ratings.models")


app.post("/rating", async (req, res) => {
    try {
        const data = await Rating.create(req.body);
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.get("/ratings", async (req, res) => {
    try {
        const data = await Rating.find().lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})

app.get("/ratings/:id", async (req, res) => {
    try {
        const data = await Rating.findById(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})
app.patch("/ratings/:id", async (req, res) => {
    try {
        const data = await Rating.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.delete("/ratings/:id", async (req, res) => {
    try {
        const data = await Rating.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
module.exports = app;
