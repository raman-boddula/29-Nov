const express = require("express");

const mongoose = require('mongoose');

const connect = () => {
  return  mongoose.connect("mongodb+srv://raman_boddula:ramanboddula@cluster0.pxmsk.mongodb.net/jobs")
}

const app = express();

app.use(express.json());


const citySchema =new  mongoose.Schema({
    name: { type: String, required: true, unique: true },
},
{
    versionKey:false
})
const City = mongoose.model("city", citySchema);
//crud starts here
app.post("/city", async (req, res) => {
    try {
        const data = await City.create(req.body);
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.get("/cities", async (req, res) => {
    try {
        const data = await City.find().lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})

app.get("/cities/:id", async (req, res) => {
    try {
        const data = await City.findById(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})
app.patch("/cities/:id", async (req, res) => {
    try {
        const data = await City.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.delete("/cities/:id", async (req, res) => {
    try {
        const data = await City.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})

///skills schema

const skillSchema = new mongoose.Schema({
    name:{type:String ,require:true, unique:true},
},
    {
        versionKey: false,
        // timestamps:true
})

const Skill = mongoose.model("skill", skillSchema);
//crud skill

app.post("/skill", async (req, res) => {
    try {
        const data = await Skill.create(req.body);
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.get("/skills", async (req, res) => {
    try {
        const data = await Skill.find().lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})

app.get("/skills/:id", async (req, res) => {
    try {
        const data = await Skill.findById(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})
app.patch("/skills/:id", async (req, res) => {
    try {
        const data = await Skill.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.delete("/skills/:id", async (req, res) => {
    try {
        const data = await Skill.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})

///
const ratingSchema = new mongoose.Schema({
    rating: { type: String, unique: true, required: true }
},
    {
        versionKey: false,
        timestamps: true
    });

const Rating = mongoose.model("rating", ratingSchema);
//ratinf crud

app.post("/rating", async (req, res) => {
    try {
        const data = await Rating.create(req.body);
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.get("/ratings", async (req, res) => {
    try {
        const data = await Rating.find().lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})

app.get("/ratings/:id", async (req, res) => {
    try {
        const data = await Rating.findById(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})
app.patch("/ratings/:id", async (req, res) => {
    try {
        const data = await Rating.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.delete("/ratings/:id", async (req, res) => {
    try {
        const data = await Rating.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
//remote schema
const remoteSchema = new mongoose.Schema({
    type: { type: String, required: true, unique:true }
}, {
    versionKey:false
})

//remote crud
const Remote = mongoose.model("remote", remoteSchema);

app.post("/remote", async (req, res) => {
    try {
        const data = await Remote.create(req.body);
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.get("/remote", async (req, res) => {
    try {
        const data = await Remote.find().lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})

app.get("/remote/:id", async (req, res) => {
    try {
        const data = await Remote.findById(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({"status": e.message});
    }
})
app.patch("/remote/:id", async (req, res) => {
    try {
        const data = await Remote.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})
app.delete("/remote/:id", async (req, res) => {
    try {
        const data = await Remote.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(data)
    }
    catch (e) {
        return res.status(500).json({ "status": e.message });
    }
})

app.listen(6543, async () => {
    await connect();
    console.log('we are connected on port 6543')
})