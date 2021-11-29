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

const query1 = require("./controllers/quer1.controller")
const query2 = require("./controllers/quer2.controller")
const query3 = require("./controllers/quer3.controller")
const query4 = require("./controllers/quer4.controller")
const query5 = require("./controllers/quer5.controller")
const query6 = require("./controllers/quer6.controller")


app.use("/jobsByCityAndSkill",query1)
app.use("jobsBySkill", query2)
app.use("jobsByRemote",query3)

app.use("/jobsByNotice", query4);
app.use("/jobsByRating/highToLow", query5)
app.use("/jobsByRating/lowToHigh",query6)
app.use("/company", query7);
app.use("/moreJob",query8)
//finding jobs by skills 

//ind all the jobs that will accept a notice period of 2 months.


app.listen(6543, async () => {
    await connect();
    console.log('we are connected on port 6543')
})