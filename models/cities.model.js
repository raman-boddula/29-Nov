const mongoose = require("mongoose");

const citySchema =new  mongoose.Schema({
    "name": { type: String, required: true, unique: true },
},
{
    versionKey:false
})
module.exports = mongoose.model("city", citySchema);