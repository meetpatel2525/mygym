const Question = require("../models/questionModel");

                            //  ------------------- for Users qusions -------------------- //

// create question
exports.insertUserQuestion = async (req, res) => {

  try {

    const { questionText, questionType, options ,stepNo,placeholder,userType} = req.body;
   
    let question = await Question.findOne({ questionText: questionText ,userType:userType});

    if (question) {
      return res.status(400).json({
        success: false,
        message: "Question already exists",
      });
    }

    question = await Question.create({

      questionText,
      questionType,
      options,
      stepNo,
      placeholder,
      userType
    
    });
    res.status(200).json({
      message: "Question added successfully",
      data: question,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// get single question
exports.singleQue = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  try {
    //user store the all data of that id
    const product = await Question.findById(id);
    res.json(product);
  } catch (error) {
    res.json({ message: console.error.message });
  }
};

// update question
exports.updateUserQuestion = async (req, res) => {
  try {
    const _id = req.params.id;
    const newQueData = {
      questionText: req.body.questionText,
      questionType: req.body.questionType,
      options: req.body.options,
      stepNo : req.body.stepNo ,
      placeholder: req.body.placeholder,
      userType: req.body.userType
    };
    
    const question = await Question.findByIdAndUpdate(_id, newQueData, {
      new: true,
      runValidators: true,
      userFindAndModify: false,
    });

    res.status(200).send({
      message: "Question Updated successfully.....",
      data: question,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

//delete Question

exports.deleteUserQuestion = async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);

    res.status(200).send({
      message: "Question Deleted successfully.....",
    });
  } catch (error) {
    res.send("error");
  }
};

//get all Question

// exports.getQuestion = async (req, res) => {
//   try {
//     const question = await Question.find();

//     res.status(200).send({
//       message: "Question listing successfully.....",
//       data: question,
//     });
//   } catch (error) {
//     res.send("error");
//   }
// };

//get all Question
exports.getUserQuestion = async (req, res) => {
  try {

    // console.log(req.query.userType,"hi qustion");

    let question = Question.find({userType:req.query.userType});

    const result = await question;

    res.status(200).send({
      message: "Gym listing successfully.....",
      data: result,
    });
  } catch (error) {
    res.send("error");
  }
};

//search Question
exports.getUserQueBySearch = async (req, res) => {

  try {
    const questiontext = req.query.searcheQuestion;

    const questionText = new RegExp(questiontext, "i"); //this is for we serch meet or Meet or MEET all are same

    const question = await Question.find({ questionText ,userType:req.query.userType});

    res.status(200).send({
      message: "question search successfully.....",
      data: question,
    });
  } catch (error) {
    res.send("error");
  }
};







