const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    jobs_opening: [
        {type:String ,required:true }
    ]
}, {
    versionKey: false,
})

module.exports = mongoose.model("company", companySchema);