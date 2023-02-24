const mongoose = require("mongoose");

const gymSchema = new mongoose.Schema({

  gymowner_id: {
    type: mongoose.Schema.ObjectId,
    ref: "GymOwners",
    required: true,
  },
  gymName: {
    type: String,
    required: true,
  },
  gymCity: {
    type: String,
    required: true,
  },
  gymimagesURL: {
    type:Array,
    required:false,
  },
  gymAccessimagesURL: {
    type:Array,
    required:false,
  },
  gymAddress: {
    type: String,
    required: true,
  },
  gymOwner: {
    type: String,
    required: true,
  },
  gymOwnerEmail: {
    type: String,
    required: true,
  }, 
  accessInstruct: {
    type: String,
    required: false,
  }, 

  gymOwnerContect: {
    type: Number,
    required: true,
  },
  
  refresh_token: {
    type: String,
    required: false,
    default: null,
  },
  token: {
    type: Boolean,
    default: false,
  },
  gymOperatingDays:{
    type:Array,
  },
  gymOperatingHours:{
    type:Number
  },
  gymFacilities:{
    type:Array
  },
  gymInformation:{
    type:String
  },
  closestMetroStation:{
    type:String
  },
  gymRuls:{
    type:Array
  },
  personelTrainer:{
    type:Boolean,
  },
  
  // gymLat: {
  //   type: String,
  //   required: true,
  // },

  Imgbuilding: {
    type: Array
  },
  
  gymOpenTime: {
    type: String,
    required: true,
  },

  gymCloseTime: {
    type: String,
    required: true,
  },
  
  gymEquipment: {
    type: Array,
    required: true,
  },

  gymBookingPrice: {
    type: Number,
    required: true,
  },
  gymStatus: {
    type: Boolean,
    default: false,
  },
});

gymSchema.set("timestamps", true);

module.exports = mongoose.model("Gym", gymSchema);
