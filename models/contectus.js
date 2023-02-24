const mongoose = require("mongoose");

const contectusSchema = new mongoose.Schema({

  category: {
    type: String,
    required: true,
  },
  inquiry: {
    type: String,
    required: true,
  },
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  message:{
    type: String,
    required: true,
  },

});

contectusSchema.set("timestamps", true);

module.exports = mongoose.model("ContectUs", contectusSchema);
