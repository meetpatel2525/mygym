const Trainer = require("../models/trainerModel");
const User = require("../models/userModel");
const GymOwner = require("../models/gymOwnerModel");
const Token = require("../models/token");

//login trainer

exports.loginAll = async (req, res) => {
  try {
    // console.log("hello log in");
    const { email, password } = req.body;
    // console.log(email);
    // console.log(password);
    if (!email || !password) {
      return res.send({
        message: "please Enter Email & Password",
      });
    }

    const trainer = await Trainer.findOne({ "data.email": email }).select(
      "+password"
    );
    // console.log(trainer);

    const user = await User.findOne({ "data.email": email }).select(
      "+password"
    );
    // console.log(user);

    const gymOwner = await GymOwner.findOne({ "data.email": email }).select(
      "+password"
    );

    console.log("hello thete login");

    if (!user && !trainer && !gymOwner) {
      return res.status(200).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    if (user) {
      const isPasswordMatch = await user.comparePassword(password);
      console.log(isPasswordMatch);
      if (isPasswordMatch) {
        console.log("user");
        res.status(200).json({
          success: true,
          message: "Login Successfully...",
          data: user,
          logintype:"user"
        });
      }else{
        return res.status(200).json({
          success: false,
          message: "Invalid Email or Password",
        });
      }
    }

    if (trainer) {
      const isPasswordMatch_1 = await trainer.comparePassword(password);
      // console.log(isPasswordMatch, "user");
      console.log("trainer");
      if (isPasswordMatch_1) {
        res.status(200).json({
          success: true,
          message: "Login Successfully...",
          data: trainer,
          logintype:"trainer"

        });
      }else{
        return res.status(200).json({
          success: false,
          message: "Invalid Email or Password",
        });
      }
    }


    if (gymOwner) {
      const isPasswordMatch_2 = await gymOwner.comparePassword(password);
      console.log("owner");
      // console.log(isPasswordMatch, "user");
      if (isPasswordMatch_2) {
        console.log("user");
        res.status(200).json({
          success: true,
          message: "Login Successfully...",
          data: gymOwner,
          logintype:"gymOwner"

        });
      }else{
        return res.status(200).json({
          success: false,
          message: "Invalid Email or Password",
        });
      }
    }


  } catch (error) {
    res.status(400).send(error);
  }
};
