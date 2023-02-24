const User = require("../models/userModel");
const Trainer = require("../models/trainerModel");
const GymOwner = require("../models/gymOwnerModel");
const Token = require("../models/token");
const Feedback = require("../models/feedback");
const Gym = require("../models/gymModel");
const crypto = require("crypto");
const sendEmail = require("./emailVeryfication/sendmail");
const { log } = require("console");

// const server = "http://137.184.91.171:4000"

const server = "http://localhost:3000";

// send email to user
exports.sendemailTouser = async(req, res) => {
    const { email } = req.body;
    // console.log(email);

    const check = await Token.findOne({ userEmail: email });
    // console.log(check, "check");

    const checkemial = await User.findOne({ "data.email": email });
    // console.log(checkemial);

    const checkemial_1 = await Trainer.findOne({ "data.email": email });
    // console.log(checkemial_1);
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
                check._id, { token: crypto.randomBytes(32).toString("hex") }, {
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
        const message = `${server}/user/verify/${mytoken?.token}`;
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

// verify User accunt
exports.verifyuser = async(req, res) => {
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

// registration user with email
exports.insertUser = async(req, res) => {
    let data = JSON.parse(req.body.data);

    try {
        let userdocimages = req.files.idproofimg ? req.files.idproofimg : [];
        // console.log(userdocimages);
        let userprofileimages = req.files.profileimg ? req.files.profileimg : [];
        // console.log(userprofileimages);

        // for add new multiple image in a array so we make null array
        let userdoc = [];
        //  hear we fatch all new image from imagearr and push or add  it in image Array
        userdocimages.map((e) => {
            userdoc.push(e.filename); //e.filename becouse we need only name of image so we use .filename
        });
        // console.log(userdoc);

        // for add new multiple image in a array so we make null array
        let userprofile = [];
        //  hear we fatch all new image from imagearr and push or add  it in image Array
        userprofileimages.map((e) => {
            userprofile.push(e.filename); //e.filename becouse we need only name of image so we use .filename
        });
        // console.log(userprofile);

        data.idproofimg = userdoc;
        // console.log(data.idproofimg);

        data.profileimg = userprofile;
        // console.log(data.idproofimg);

        let user = await User.findOne({ "data.email": data.email });

        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        // create data base
        user = await User.create({ data: data });

        res.status(200).json({
            message: "user register successfully",
            data: user,
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

//login user

exports.loginUser = async(req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.send({
                message: "please Enter Email & Password",
            });
        }

        const user = await User.findOne({ "data.email": email }).select(
            "+password"
        );

        // console.log(user);

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
exports.updateUser = async(req, res) => {
    try {
        const _id = req.params.id;
        // console.log(_id)
        const newUserData = {
            name: req.body.name,
            dateOfBirth: req.body.dateOfBirth,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            goals: req.body.goals,
            gender: req.body.gender,
            experience: req.body.experience,
            training: req.body.training,
            equipment: req.body.equipment,
            personalTrainer: req.body.personalTrainer,
            areas: req.body.areas,
            comments: req.body.comments,
            userStatus: req.body.userStatus,
        };

        // console.log(newUserData, "newUserData");

        // console.log(_id,"_id");

        const user = await User.findByIdAndUpdate(_id, newUserData, {
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
exports.getAllUser = async(req, res) => {
    try {
        // console.log("user");

        let user = User.find();

        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.limit) || 2;
        const skip = (page - 1) * pageSize;
        const total = await User.countDocuments();
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
exports.deleteUser = async(req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);

        res.status(200).send({
            message: "User Deleted successfully.....",
        });
    } catch (error) {
        res.send("error");
    }
};

// search any type of user
exports.getUserBySearch = async(req, res) => {
    try {
        const name = req.query.usersearch;

        const regfirsname = new RegExp(name, "i"); //this is for we serch meet or Meet or MEET all are same

        // console.log(req,"role");
        // console.log(role, "role");

        let user = await User.find({ name: regfirsname });

        // let user2 = await User.find({  lastName: regfirsname , role:regrol});

        res.status(200).send({
            message: "user listing successfully.....",
            data: user,
        });
    } catch (error) {
        res.send("error");
    }
};

// gym feedback by user
exports.feedback = async(req, res) => {
    try {
        const {
            email,
            username,
            feedback,
            gymName,
            gymAddress,
            DateofBooking,
            ReviewTypes,
            User_id,
        } = req.body;

        // const _id = req.params.id;
        // let user = await User.findOne({ email: email });
        // let gym = await Gym.findById(_id);

        // if (!user) {
        //   return res.status(400).json({
        //     success: false,
        //     message: "User not exists",
        //   });
        // }

        // create data base
        let myfeedback = await Feedback.create({
            User_id: User_id,
            email: email,
            username: username,
            feedback: feedback,
            gymName: gymName,
            gymAddress: gymAddress,
            DateofBooking: DateofBooking,
            ReviewTypes: ReviewTypes,
        });
        res.status(200).json({
            message: "give feedback successfully",
            data: myfeedback,
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

//get all feedback

exports.getfeedback = async(req, res) => {
    console.log("get booking called ");

    try {
        let feedback = Feedback.find();
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.limit) || 2;
        const skip = (page - 1) * pageSize;
        const total = await Feedback.countDocuments();
        console.log(total, "total feed back");
        const totalPages = Math.ceil(total / pageSize);

        feedback = feedback.skip(skip).limit(pageSize);

        if (page > totalPages) {
            return res.status(404).json({
                status: "failed",
                massage: "No data found",
            });
        }

        const result = await feedback;
        res.status(200).send({
            message: "Get feedback successfully.....",

            count: result.length,
            page,
            totalPages,
            data: result,
        });
    } catch (error) {
        res.send("error");
    }
};