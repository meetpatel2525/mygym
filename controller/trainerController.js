const Trainer = require("../models/trainerModel");
const User = require("../models/userModel");
const GymOwner = require("../models/gymOwnerModel");
const crypto = require("crypto");
const sendEmail = require("./emailVeryfication/sendmail");
const Token = require("../models/token");

const server = "http://137.184.91.171:4000"
// const server = "http://localhost:3001";

// send email to trainer

exports.sendemailToTrainer = async (req, res) => {
  const { email } = req.body;

  const check = await Token.findOne({ userEmail: email });

  const checkemial = await Trainer.findOne({ "data.email": email });

  const checkemial_1 = await User.findOne({ "data.email": email });
  // console.log(checkemial);

  const checkemial_2 = await GymOwner.findOne({ "data.email": email });
  // console.log(checkemial_2);

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
    const message = `${server}/trainer/verify/${mytoken?.token}`;
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

// verify trainer accunt
exports.verifytrainer = async (req, res) => {
  console.log("veryfyEmail called");

  const token = await Token.findOne({
    token: req.params.token,
  });

  console.log(token, "token");

  if (!token) {
    return res.status(201).json({ message: "Invalid Link" });
  }
  await token.remove();
  res
    .status(200)
    .json({ message: "Email verified successfully", data: token.userEmail });
};

// registration trainer
exports.insertTrainer = async (req, res) => {
  let data = JSON.parse(req.body.data);

  try {
    let userdocimages = req.files.idproofimg ? req.files.idproofimg : [];
    let userprofileimages = req.files.profileimg ? req.files.profileimg : [];

    // for add new multiple image in a array so we make null array
    let userdoc = [];
    //  hear we fatch all new image from imagearr and push or add  it in image Array
    userdocimages.map((e) => {
      userdoc.push(e.filename); //e.filename becouse we need only name of image so we use .filename
    });

    // for add new multiple image in a array so we make null array
    let userprofile = [];
    //  hear we fatch all new image from imagearr and push or add  it in image Array
    userprofileimages.map((e) => {
      userprofile.push(e.filename); //e.filename becouse we need only name of image so we use .filename
    });

    data.idproofimg = userdoc;
    data.profileimg = userprofile;

    let user = await Trainer.findOne({ "data.email": data.email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // create data base
    user = await Trainer.create({ data: data });

    res.status(200).json({
      message: "user register successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

//login trainer

exports.loginTrainer = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send({
        message: "please Enter Email & Password",
      });
    }
    const user = await Trainer.findOne({ "data.email": email }).select(
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

//update user
exports.updateTrainer = async (req, res) => {
  try {
    const _id = req.params.id;
    const newUserData = {
      name: req.body.name,
      dateOfBirth: req.body.dateOfBirth,

      gender: req.body.gender,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      workingDays: req.body.workingDays,
      workingHours: req.body.workingHours,
      specialization: req.body.specialization,
      qualifications: req.body.qualifications,
      personalTrainingRate: req.body.personalTrainingRate,
      areas: req.body.areas,
      awards: req.body.awards,
      instructions: req.body.instructions,
      comments: req.body.comments,
      rental: req.body.rental,
      userStatus: req.body.userStatus,
    };

    const user = await Trainer.findByIdAndUpdate(_id, newUserData, {
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

//get all user
exports.getAllTrainer = async (req, res) => {
  try {
    // console.log("user");

    let user = Trainer.find();

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 2;
    const skip = (page - 1) * pageSize;
    const total = await Trainer.countDocuments();
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

// delete user
exports.deleteTrainer = async (req, res) => {
  try {
    await Trainer.findByIdAndDelete(req.params.id);

    res.status(200).send({
      message: "User Deleted successfully.....",
    });
  } catch (error) {
    res.send("error");
  }
};

// search any type of user
exports.getTrainerBySearch = async (req, res) => {
  try {
    const name = req.query.usersearch;

    const regfirsname = new RegExp(name, "i"); //this is for we serch meet or Meet or MEET all are same

    // console.log(req,"role");
    // console.log(role, "role");

    let user = await Trainer.find({ name: regfirsname });

    // let user2 = await User.find({  lastName: regfirsname , role:regrol});

    res.status(200).send({
      message: "user listing successfully.....",
      data: user,
    });
  } catch (error) {
    res.send("error");
  }
};
