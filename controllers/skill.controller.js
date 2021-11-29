
const express = require("express");

const app = express.Router();

const Skill = require("../models/skill.model")


app.post("/skill", async (req, res) => {
    try {
        const data = await Skill.create(req.body);
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.get("/skills", async (req, res) => {
    try {
        const data = await Skill.find().lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})

app.get("/skills/:id", async (req, res) => {
    try {
        const data = await Skill.findById(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})
app.patch("/skills/:id", async (req, res) => {
    try {
        const data = await Skill.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.delete("/skills/:id", async (req, res) => {
    try {
        const data = await Skill.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})


module.exports = app;
