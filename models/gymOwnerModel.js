const mongoose = require("mongoose");
const validator = require("validator");
var Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

var gymOwnerSchema = new Schema({
  data : Schema.Types.Mixed,
  userStatus: {
        type: Boolean,
        default: true,
      },
});

gymOwnerSchema.set("timestamps", true);

gymOwnerSchema.pre("save", async function (next) {
  if (!this.isModified("data.password")) {
    next();
  }

  this.data.password = await bcrypt.hash(this.data.password, 10);
});

gymOwnerSchema.pre("save", async function (next) {
  if (!this.isModified("data.confirmpassword")) {
    next();
  }

  this.data.confirmpassword = await bcrypt.hash(this.data.confirmpassword, 10);
});

// Compare Password
gymOwnerSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.data.password);
};

module.exports = mongoose.model("GymOwners", gymOwnerSchema);

// const mongoose = require(" mongoose");
// const validator = require("validator");

// const bcrypt = require("bcryptjs");

// const gymOwnerSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     // maxLength: [30, "Name cannot exceed 30 characters"],
//     // minLength: [1, "Name should have more than 4 characters"],
//   },

//   dateOfBirth: {
//     type: Date,
//     required: true,
//   },
//   userStatus: {
//     type: Boolean,
//     default: true,
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
//   veryfyEmail: {
//     type: Boolean,
//     default: false
//   },
//   resetPasswordToken: String,
//   resetPasswordExpire: Date,
// });
// gymOwnerSchema.set("timestamps", true);

// // hasing password
// gymOwnerSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }

//   this.password = await bcrypt.hash(this.password, 10);
// });
// // Compare Password

// gymOwnerSchema.methods.comparePassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

// module.exports = mongoose.model("GymOwners", gymOwnerSchema);