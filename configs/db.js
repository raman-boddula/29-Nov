const mongoose = require("mongoose");


module.exports = () => {
    return  mongoose.connect("mongodb+srv://raman_boddula:ramanboddula@cluster0.pxmsk.mongodb.net/jobs")
}
  
// module.exports = connect;