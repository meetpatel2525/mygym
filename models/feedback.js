const mongoose = require("mongoose");

const feedback = new mongoose.Schema({

  User_id: {
    // type: String,
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  gymName:{
    type: String,
    required: true,
  },
  gymAddress:{
    type: String,
    required: true,
  },
  DateofBooking:{
    type: String,
    required: true,
  },
  ReviewTypes:{
    type: Array,
    required: true,
  },
  username:{
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  
});

feedback.set("timestamps", true);

module.exports = mongoose.model("Feedback", feedback);
