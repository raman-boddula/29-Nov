const express = require("express");

// const mongoose = require('mongoose');

const connect = require("./configs/db")

const app = express();

app.use(express.json());



const CityController = require("./controllers/cities.controller")

app.use("/cities", CityController);

const SkillController = require("./controllers/skill.controller")
app.use("/skills", SkillController);

const RatingController =require("./controllers/rating.controller")
app.use("/ratings", RatingController);

const RemoteController = require("./controllers/remote.controller")
app.use("/remote", RemoteController);


const CompanyController =require("./controllers/company.controller");
app.use("/companies", CompanyController);

const JobController = require("./controllers/jobs.controller")
app.use("/jobs", JobController);


const query1 = require("./controllers/quer1.controller")
app.use("/jobsByCityAndSkill", query1);

const query2 = require("./controllers/query2.controller")
app.use("/jobsBySkill", query2);

const query3 = require("./controllers/query3.controller")
app.use("/jobsByRemote",query3)

const query4 = require("./controllers/query4.controller")
app.use("/jobsByNotice", query4);

const query5 = require("./controllers/query5.controller")
app.use("/jobsByRating/highToLow", query5)

const query6 = require("./controllers/query6.controller")
app.use("/jobsByRating/lowToHigh",query6)

const query7 = require("./controllers/query7.controller");
app.use("/company", query7);

const query8 = require("./controllers/query8")
app.use("/moreJob",query8)





app.listen(6543, async () => {
    await connect();
    console.log('we are connected on port 6543')
})