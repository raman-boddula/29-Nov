const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    name:{type:String ,require:true, unique:true},
},
    {
        versionKey: false,
        // timestamps:true
})

module.exports = mongoose.model("skill", skillSchema);