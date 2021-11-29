const mongoose = require("mongoose");

const company = require("./company.models");

const remote = require("./remote.model");
const city = require("./cities.model")
const rating = require("./ratings.model")
const skill = require("./skill.model")

const jobSchema = new mongoose.Schema({
    role: { type: String, required: true },
    company_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:company,
        required:true
    },
    remote_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:remote,
        required:true
    },
    city_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:city,
        required:true
    }],
    notice_period: {type:String , required:true},
    rating_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref:rating,
        required:true
    },
    skill_ids: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:skill,
        required:true
    }]
}, {
    versionKey: false,
    timestamps:true
})

module.exports = mongoose.model("job", jobSchema)