const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  question: {
    type: mongoose.Schema.ObjectId,
    ref: "Question",
    required: true,
  },
  answer:{
    type:String,
    require:true
  }
});

answerSchema.set('timestamps',true)

module.exports = mongoose.model("Answer", answerSchema);
