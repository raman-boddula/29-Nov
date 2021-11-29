const mongoose = require("mongoose");

const remoteSchema = new mongoose.Schema({
    type: { type: String, required: true, unique:true }
}, {
    versionKey:false
})

module.exports= mongoose.model("remote", remoteSchema);