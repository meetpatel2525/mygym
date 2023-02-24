const mongoose = require("mongoose");

const favGymSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  gym: {
    type: mongoose.Schema.ObjectId,
    ref: "Gym",
    required: true,
  },
});
favGymSchema.set("timestamps", true);

module.exports = mongoose.model("FavGym", favGymSchema);
