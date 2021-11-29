//find the company that has the most open jobs.
const express = require("express");

const app = express.Router();
app.get("/:id", async (req, res) =>
{
    try {
        const data = await Job.find({"company_id":req.params.id}).populate("company_id").lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})

module.exports = app;