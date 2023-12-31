const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrLParser: true,
    });
    console.log("MongoDb Connected...");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
