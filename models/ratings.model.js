const mongoose=require("mongoose")

const ratingSchema = new mongoose.Schema({
    rating: { type: String, unique: true, required: true }
},
    {
        versionKey: false,
        timestamps: true
    });

module.exports = mongoose.model("rating", ratingSchema);