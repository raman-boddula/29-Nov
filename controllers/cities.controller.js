const express = require("express");


const City = require("../models/cities.model")

const router = express.Router();

router.post("", async (req, res) => {
    try {
        const data = await City.create(req.body);
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
router.get("", async (req, res) => {
    try {
        const data = await City.find().lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})

router.get("/:id", async (req, res) => {
    try {
        const data = await City.findById(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})
router.patch("/:id", async (req, res) => {
    try {
        const data = await City.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const data = await City.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})

module.exports = router;