const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    gymName:{
        type: String,
        required: true,
      },
      gymOwner: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      userEmail: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      summary: {
        type: String,
        required:false,
      },
      start: {
        type: String,
        required: true,
      },
      end:{
        type: String,
        required: true,
      },
      fees:{
        type:String,
        default:true
      },
      htmlLink:{
        type:String,
        default:false
      }, 
      paymentStatus:{
        type:Boolean,
        default:false
      } 
})

bookingSchema.set("timestamps", true);

module.exports = mongoose.model("Booking", bookingSchema);
