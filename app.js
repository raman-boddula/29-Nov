const express = require("express");

const mongoose = require('mongoose');

const connect = require("./configs/db")

const app = express();

app.use(express.json());



const City = require("./models/cities.model")


const Skill = require("./models/skill.model")

const Rating =require("./models/ratings.model")
const Remote = require("./models/remote.model")


const Company =require("./models/company.models");

const Job = require("./models/jobs.models")

app.use("/cities", City);
app.use("/skills", Skill);
app.use("/ratings", Rating);
app.use("/remote", Remote);
app.use("/companies", Company);
app.use("/jobs", Job);




///finding jobs by city  &skill
app.get("/jobsByCityAndSkill/:id/:skill", async (req, res) => {
    try {
        const jobs = await Job.find({ "city_id": req.params.id ,"skill_ids":req.params.skill}).populate("city_id").populate("skill_ids").populate("company_id")
        return res.status(201).send(jobs)
     }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})


//finding jobs by skills 

app.get("/jobsBySkill/:id", async (req, res) => {
    try {
        const jobs = await Job.find({ "skill_ids": req.params.id }).populate("city_id").populate("skill_ids").populate("company_id")
        return res.status(201).send(jobs)
     }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})

//find all the jobs that are available as Work from home.

app.get("/jobsByRemote/:id", async (req, res) => {
    try {
        const jobs = await Job.find({ "remote_id": req.params.id }).populate("city_id").populate("skill_ids").populate("company_id").populate("remote_id").lean().exec();
        return res.status(201).send(jobs)
     }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})

//ind all the jobs that will accept a notice period of 2 months.

app.get("/jobsByNotice/:id", async (req, res) => {
    try {
        const jobs = await Job.find({ "notice_period": req.params.id }).populate("city_id").populate("skill_ids").populate("company_id").populate("remote_id").lean().exec();
        return res.status(201).send(jobs)
     }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})

//find all jobs by sorting the jobs as per their rating.

app.get("/jobsByRating/highToLow", async (req, res) => {
    try {
        const jobs = await Job.find().sort({"rating_id": 1}).populate("rating_id").populate("city_id").populate("skill_ids").populate("company_id").populate("remote_id").lean().exec();
        return res.status(201).send(jobs)
     }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})

//low to high
app.get("/jobsByRating/lowToHigh", async (req, res) => {
    try {
        const jobs = await Job.find().sort({"rating_id": -1}).populate("rating_id").populate("city_id").populate("skill_ids").populate("company_id").populate("remote_id").lean().exec();
        return res.status(201).send(jobs)
     }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
//an api to get details of the company.
app.get("/company/:id", async (req, res) => {
    try {
        const data = await Company.findById(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})
//find the company that has the most open jobs.
app.get("/moreJob/:id", async (req, res) =>
{
    try {
        const data = await Job.find({"company_id":req.params.id}).populate("company_id").lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})


app.listen(6543, async () => {
    await connect();
    console.log('we are connected on port 6543')
})