const express = require("express");

const mongoose = require('mongoose');

const connect = () => {
  return  mongoose.connect("mongodb+srv://raman_boddula:ramanboddula@cluster0.pxmsk.mongodb.net/jobs")
}

const app = express();

app.use(express.json());

app.listen(6543, async () => {
    await connect();
    console.log('we are connected on port 6543')
})

const citySchema =new  mongoose.Schema({
    name: { type: String, required: true, unique: true },
},
    {
        versionKey:false
})
const City = mongoose.model("city", citySchema);
//crud starts here
app.post("/city",)