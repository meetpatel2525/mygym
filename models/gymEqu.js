const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
    equipmentName: {
        type: String,
        required: true,
      },
})

equipmentSchema.set('timestamps',true)

module.exports = mongoose.model("Equipment", equipmentSchema);