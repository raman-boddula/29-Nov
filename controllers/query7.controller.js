const express = require("express");

const app = express.Router();

//an api to get details of the company.
app.get("/:id", async (req, res) => {
    try {
        const data = await Company.findById(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})



module.exports = app;