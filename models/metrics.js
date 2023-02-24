const mongoose = require("mongoose");

const metricsSchema = new mongoose.Schema({

      metricsName: {
        type: String,
        required: true,
      },
      metricsStatus: {
        type: Boolean,
        default: false,
      },
})

metricsSchema.set('timestamps',true)

module.exports = mongoose.model("Metrics", metricsSchema);