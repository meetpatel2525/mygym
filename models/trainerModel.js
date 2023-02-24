const mongoose = require("mongoose");
const validator = require("validator");
var Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");


var trainerSchema = new Schema({
  data : Schema.Types.Mixed,
  userStatus: {
    type: Boolean,
    default: true,
  },
});

trainerSchema.set("timestamps", true);


trainerSchema.pre("save", async function (next) {
  if (!this.isModified("data.password")) {
    next();
  }
  this.data.password = await bcrypt.hash(this.data.password, 10);
});

trainerSchema.pre("save", async function (next) {
  if (!this.isModified("data.confirmpassword")) {
    next();
  }

  this.data.confirmpassword = await bcrypt.hash(this.data.confirmpassword, 10);
});


// Compare Password
trainerSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.data.password);
};

module.exports = mongoose.model("Trainer", trainerSchema);


// const trainerSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     maxLength: [30, "Name cannot exceed 30 characters"],
//     minLength: [2, "Name should have more than 4 characters"],
//   },
//   dateOfBirth: {
//     type: Date,
//     required: true,
//   },
//   gender: {
//     type: String,
//     require: true,
//   },
//   email: {
//     type: String,
//     required: [true, "Please Enter Your Email"],
//     unique: true,
//     validate: [validator.isEmail, "Please Enter a valid Email"],
//   },
//   password: {
//     type: String,
//     required: [true, "Please Enter Your Password"],
//     // minLength: [8, "Password should be greater than 8 characters"],
//     select: false,
//   },
//   phoneNumber: {
//     type: Number,
//     require: true,
//   },
//   workingDays: {
//     type: Array,
//     require: true,
//   },
//   workingHours: {
//     type: Number,
//     require: true,
//   },
//   specialization: {
//     type: Array,
//     require: true,
//   },
//   qualifications: {
//     type: Array,
//     require: false,
//   },
//   personalTrainingRate: {
//     type: String,
//     require: true,
//   },
//   areas: {
//     type: Array,
//     require: true,
//   },
//   awards: {
//     type: String,
//   },
//   instructions: {
//     type: String,
//   },
//   userStatus: {
//     type: Boolean,
//     default: true,
//   },
//   veryfyEmail: {
//     type: Boolean,
//     default: false
//   },
//     pictures:{
//       type:Array,
//       require:true,
//     },
//   comments: {
//     type: String,
//   },
//   rental: {
//     type: Boolean,
//   },
//   idproofIMG: {
//     type: Array,
//   },
//   // identification:{
//   //   type: String,
//   //   require: true,
//   // },
//   resetPasswordToken: String,
//   resetPasswordExpire: Date,
// });

