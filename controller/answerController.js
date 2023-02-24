const Answer = require("../models/queAnsModel");

//insert answer
exports.insertAns = async (req, res) => {
  try {
    const { user, question, answer } = req.body;

    equipment = await Answer.create({
      user,
      question,
      answer,
    });
    res.status(200).json({
      message: "Answer added successfully....",
      data: equipment,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// update answer
exports.updateAnswer = async (req, res) => {
  try {
    const _id = req.params.id;
    const newAnsData = {
      answer: req.body.answer,
    };
    const answer = await Answer.findByIdAndUpdate(_id, newAnsData, {
      new: true,
      runValidators: true,
      userFindAndModify: false,
    });

    res.status(200).send({
      message: "Answer Updated successfully.....",
      data: answer,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
