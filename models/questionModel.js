const mongoose = require("mongoose");


const questionSchema = new mongoose.Schema({

  questionText: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    required: true,
  },
  options:{
    type:Array,
  },
  stepNo:{
    type: String,
    required: true,
  },
  placeholder:{
    type: String,
  },
});



questionSchema.set('timestamps',true)

module.exports = mongoose.model("Question", questionSchema);
