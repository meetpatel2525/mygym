const mongoose = require("mongoose");
const validator = require("validator");
var Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");


var userSchema = new Schema({
  data : Schema.Types.Mixed,
  userStatus: {
    type: Boolean,
    default: true,
  },
});

userSchema.set("timestamps", true);

userSchema.pre("save", async function (next) {
  if (!this.isModified("data.password")) {
    next();
  }
  this.data.password = await bcrypt.hash(this.data.password, 10);
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("data.confirmpassword")) {
    next();
  }
  
  this.data.confirmpassword = await bcrypt.hash(this.data.confirmpassword, 10);
});

// compare password
userSchema.methods.comparePassword = async function (data) {

  // console.log( data, "my data pass");
  return await bcrypt.compare(data, this.data.password);
};


module.exports = mongoose.model("User", userSchema);


















// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     maxLength: [30, "Name cannot exceed 30 characters"],
//     minLength: [2, "Name should have more than 4 characters"],
//   },
//   birthday: {
//     type: String,
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
//     // minLength:[8, "Password should be greater than 8 characters"],
//     select: false,
//   },
//   profileimg: {
//     type:Array,
//     required:false,
//   },
//   idproofimg: {
//     type:Array,
//     required:false,
//   },
//   phoneNumber: {
//     type: Number,
//     require: true,
//   },
//   goals: {
//     type: Array,
//   },
//   experience: {
//     type: String,
//   },
//   userStatus: {
//     type: Boolean,
//     default: true,
//   },
//   training: {
//     type: Array,
//   },
//   equipment: {
//     type: Array,
//   },
//   personalTrainer: {
//     type: Boolean,
//   },
//   areas: {
//     type: Array,
//   },
//   comments: {
//     type: String,
//   },
//   veryfyEmail: {
//     type: Boolean,
//     default: false
//   },
//   resetPasswordToken: String,
//   resetPasswordExpire: Date,
// });

