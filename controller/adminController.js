const Admin = require("../models/adminModel");
const User = require("../models/userModel");
const GymOwners = require("../models/gymOwnerModel");
const Trainer = require("../models/trainerModel");
const Booking = require("../models/booking");
const  Gym = require("../models/gymModel")
const  Metrics = require("../models/metrics")
const  ContectUs = require("../models/contectus")


// register admin 
exports.insertUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await Admin.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    user = await Admin.create({
      email,
      password,
    });
    res.status(200).json({
      message: "user register successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
//login admin
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send({
        message: "please Enter Email & Password",
      });
    }
    const user = await Admin.findOne({ email }).select("+password");
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


//get all users for deshbord admin
exports.allusers = async (req, res) => {
  try {

    let user = await User.find();

    res.status(200).json({
      success: true,
      message: "get all users ",
      data: user,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

//get all gymowner for deshbord admin
exports.allgymowner = async (req, res) => {
  try {
    let gymoener = await GymOwners.find();
    res.status(200).json({
      success: true,
      message: "get all gymoener ",
      data: gymoener ,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

//get all gym for deshbord admin
exports.allgym = async (req, res) => {
  try {

    let gym= await Gym.find();
    res.status(200).json({
      success: true,
      message: "get all gy ",
      data: gym ,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

//get all trainer for deshbord admin
exports.alltrainer = async (req, res) => {
  try {

    let trainer = await Trainer.find();

    res.status(200).json({
      success: true,
      message: "get all trainer ",
      data: trainer,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

//get all bookingfor deshbord admin
exports.allbooking = async (req, res) => {
  try {

    let booking = await Booking.find();

    res.status(200).json({
      success: true,
      message: "get all users ",
      data: booking,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};


//add metrics
exports.addmetrics = async (req, res) => {
  
  try {
    const { metricsName} = req.body;

    let myetricsName = await Metrics.findOne({ metricsName: metricsName });
  

    if (myetricsName) {
      return res.status(400).json({
        success: false,
        message: "metrics already exists",
      });
    }

   let metrics = await Metrics.create({
      metricsName
    });

// console.log(metrics,"metrics");
    
res.status(200).json({
      message: "metrics added successfully....",
      data: metrics,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

//get all metrics deshbord admin
exports.allmetrics = async (req, res) => {
  
  try {

    let metrics = await Metrics.find();

    res.status(200).json({
      success: true,
      message: "get all metrics ",
      data: metrics,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};


// update metrics
exports.editmetrics = async (req, res) => {

  try {

    const _id = req.params.id;
    
    const updatedata = {
      metricsStatus: req.body.metricsStatus,
    };

    const answer = await Metrics.findByIdAndUpdate(_id, updatedata, {
      new: true,
      runValidators: true,
      userFindAndModify: false,
    });

    res.status(200).send({
      message: "Metrics Updated successfully.....",
      data: answer,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};


//add inqury 
exports.addinquery = async (req, res) => {
  
  try {

   console.log("contect called ");

    const { category , inquiry ,name, email,message} = req.body;

   let data = await ContectUs.create({
    category , inquiry ,name, email,message
    });
    
res.status(200).json({
      message: "inquiry added successfully....",
      data: data,
      success :true
    });
  } catch (error) {
    res.status(400).send(error);
  }
};


//get all inqury
exports.allinquery = async (req, res) => {
  
  try {

    let data = await ContectUs.find();

    res.status(200).json({
      success: true,
      message: "get all inquery ",
      data: data,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
