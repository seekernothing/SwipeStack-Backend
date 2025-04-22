const mongoose = require("mongoose")

const connectDB = async ()=>{
await mongoose.connect(
  "mongodb+srv://swipestackadmin:swipe123@cluster0.sbpyhsw.mongodb.net/swipestack"
);
}

module.exports = connectDB



