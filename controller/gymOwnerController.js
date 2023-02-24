const GymOwners = require("../models/gymOwnerModel");
const User = require("../models/userModel");
const Trainer = require("../models/trainerModel");
const Token = require("../models/token");
const crypto = require("crypto");
const sendEmail = require("./emailVeryfication/sendmail");

const server = "http://137.184.91.171:4000"

// const server = "http://localhost:3001";

// send email to owner
exports.sendemailToOwner = async (req, res) => {
  const { email } = req.body;

  const check = await Token.findOne({ userEmail: email });

  const checkemial = await GymOwners.findOne({ "data.email": email });

  const checkemial_2 = await User.findOne({ "data.email": email });
  // console.log(checkemial);

  const checkemial_1 = await Trainer.findOne({ "data.email": email });
  // console.log(checkemial_1);

  if (checkemial_1 || checkemial_2 || checkemial) {
    return res
      .status(201)
      .send({ success: false, message: "Email is already registered" });
  } else {
    let mytoken = "";

    if (check) {
      mytoken = await Token.findByIdAndUpdate(
        check._id,
        { token: crypto.randomBytes(32).toString("hex") },
        {
          new: true,
          runValidators: true,
          userFindAndModify: false,
        }
      );
    } else {
      console.log("else called");
      mytoken = await Token.create({
        userEmail: email,
        token: crypto.randomBytes(32).toString("hex"),
      });
    }
    const message = `${server}/gymowner/verify/${mytoken?.token}`;
    await sendEmail({
      email: email,
      subject: "Verify Email",
      message,
    });

    res.status(200).json({
      message: "Email sent successfully",
    });
  }
};

// verify gymowner accunt
exports.verifygymowner = async (req, res) => {
  console.log("veryfyEmail called");

  // const trainer = await GymOwners.findOne({ _id: req.params.id });
  // // console.log(user);

  // if (!trainer) return res.status(400).json({ message: "Invalid link" });

  const token = await Token.findOne({
    token: req.params.token,
  });

  if (!token) {
    return res.status(400).json({ message: "Invalid Link" });
  }

  // console.log("trainer", trainer._id);

  // await GymOwners.updateOne({ _id: trainer._id }, { veryfyEmail: true });

  await token.remove();

  res
    .status(200)
    .json({ message: "Email verified successfully", data: token.userEmail });
};

// registration Owner with email
exports.insertGymOwner = async (req, res) => {
  let data = JSON.parse(req.body.data);
  // console.log(data);

  try {
    let ownerdocimages = req.files.idproofimg ? req.files.idproofimg : [];
    // console.log(ownerdocimages)
    let ownerprofileimages = req.files.profileimg ? req.files.profileimg : [];
    // console.log(ownerprofileimages)
    let ownerGymimages = req.files.gymImg ? req.files.gymImg : [];
    // console.log(ownerGymimages);
    let gynAccessimages = req.files.gymAccessImg ? req.files.gymAccessImg : [];
    // console.log(ownerGymimages);

    // for add new multiple image in a array so we make null array
    let ownerdoc = [];
    //  hear we fatch all new image from imagearr and push or add  it in image Array
    ownerdocimages.map((e) => {
      ownerdoc.push(e.filename); //e.filename becouse we need only name of image so we use .filename
    });

    // for add new multiple image in a array so we make null array
    let ownerprofile = [];
    //  hear we fatch all new image from imagearr and push or add  it in image Array
    ownerprofileimages.map((e) => {
      ownerprofile.push(e.filename); //e.filename becouse we need only name of image so we use .filename
    });

    // for add new multiple image in a array so we make null array
    let gymfile = [];
    //  hear we fatch all new image from imagearr and push or add  it in image Array
    ownerGymimages.map((e) => {
      gymfile.push(e.filename); //e.filename becouse we need only name of image so we use .filename
    });

    // for add new multiple image in a array so we make null array
    let gymAccess = [];
    //  hear we fatch all new image from imagearr and push or add  it in image Array
    gynAccessimages.map((e) => {
      gymAccess.push(e.filename); //e.filename becouse we need only name of image so we use .filename
    });

    data.idproofimg = ownerdoc;
    // console.log(ownerdoc)
    data.profileimg = ownerprofile;
    // console.log(ownerprofile);
    data.gymImg = gymfile;
    // console.log(gymfile)
    data.gymAccessImg = gymAccess;
    // console.log(gymfile)

    let owner = await GymOwners.findOne({ "data.email": data.email });
    // console.log(owner);

    if (owner) {
      return res.status(400).json({
        success: false,
        message: "Owner already exists",
      });
    }

    // create data base
    owner = await GymOwners.create({ data: data });
    // console.log(owner)

    // const token = await Token.create({
    //   userId: user._id,
    //   token: crypto.randomBytes(32).toString("hex"),
    // });
    // const message = `${process.env.FRONTEND_URL}/user/${user._id}/verify/${token.token}`;
    // await sendEmail({
    //   email: data.email,
    //   subject: "Verify Email",
    //   message,
    // });

    res.status(200).json({
      message: "Owner register successfully",
      data: owner,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// // registration gymowner
// exports.insertGymOwner = async (req, res) => {
//   try {
//     console.log("gymowner called");

//     const { name, dateOfBirth, gender, email, password, phoneNumber } =
//       req.body;

//     let gymowner = await GymOwners.findOne({ email: email });

//     if (gymowner) {
//       return res.status(400).json({
//         success: false,
//         message: "User already exists",
//       });
//     }

//     gymowner = await GymOwners.create({
//       name,
//       dateOfBirth,
//       gender,
//       email,
//       password,
//       phoneNumber,
//     });

//     console.log(gymowner, "gymowner");

//     const token = await Token.create({
//       userId: gymowner._id,
//       token: crypto.randomBytes(32).toString("hex"),
//     });

//     const message = `${process.env.FRONTEND_URL}/gymowner/${gymowner.id}/verify/${token.token}`;

//     //  console.log(email,"email");

//     await sendEmail({
//       email: email,
//       subject: "Verify Email",
//       message,
//     });

//     res.status(200).json({
//       message: "user register successfully",
//       data: gymowner,
//     });
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

//login gymowner

exports.loginGymOwners = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send({
        message: "please Enter Email & Password",
      });
    }
    const user = await GymOwners.findOne({ "data.email": email }).select(
      "+password"
    );
    if (!user) {
      return res.status(200).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(200).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }
    res.status(200).json({
      success: true,
      message: "Login Successfully...",
      data: user,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

//update gymowner
exports.updateGymOwners = async (req, res) => {
  try {
    const _id = req.params.id;

    const newUserData = {
      name: req.body.name,
      dateOfBirth: req.body.dateOfBirth,
      gender: req.body.gender,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      userStatus: req.body.userStatus,
    };

    const user = await GymOwners.findByIdAndUpdate(_id, newUserData, {
      new: true,
      runValidators: true,
      userFindAndModify: false,
    });

    res.status(200).send({
      message: "User Updated successfully.....",
      data: user,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

//get all gymowner
exports.getAllGymOwners = async (req, res) => {
  try {
    // console.log("user");

    let user = GymOwners.find();

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 2;
    const skip = (page - 1) * pageSize;
    const total = await GymOwners.countDocuments();
    const totalPages = Math.ceil(total / pageSize);
    user = user.skip(skip).limit(pageSize);

    if (page > totalPages) {
      return res.status(404).json({
        status: "failed",
        massage: "No data found",
      });
    }

    const result = await user;
    res.status(200).send({
      message: "User listing successfully....",

      count: result.length,
      page,
      totalPages,
      data: result,
    });
  } catch (error) {
    res.send("error");
  }
};

// delete gymowner
exports.deleteGymOwners = async (req, res) => {
  try {
    await GymOwners.findByIdAndDelete(req.params.id);

    res.status(200).send({
      message: "User Deleted successfully.....",
    });
  } catch (error) {
    res.send("error");
  }
};

// search any type of gymowner
exports.getGymOwnersBySearch = async (req, res) => {
  try {
    const name = req.query.usersearch;

    const regfirsname = new RegExp(name, "i"); //this is for we serch meet or Meet or MEET all are same

    // console.log(req,"role");
    // console.log(role, "role");

    let user = await GymOwners.find({ name: regfirsname });

    // let user2 = await User.find({  lastName: regfirsname , role:regrol});

    res.status(200).send({
      message: "user listing successfully.....",
      data: user,
    });
  } catch (error) {
    res.send("error");
  }
};
