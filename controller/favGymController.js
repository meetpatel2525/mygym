const FavGym = require("../models/questionModel");

exports.insertGym = async (req, res) => {
  try {
    const { user, gym } = req.body;
    let favGym = await FavGym.findOne({ gym: gym });
    if (favGym) {
      return res.status(400).json({
        success: false,
        message: "gym already added in favourite list",
      });
    }
    favGym = await FavGym.create({
      user,
      gym,
    });
    res.status(200).json({
      message: "Question added successfully",
      data: favGym,
    });
  } catch (error) {
    res.stattus(400).send(error);
  }
};

//delete fav gym
exports.deleteFavGym = async (req, res) => {
  try {
    await FavGym.findByIdAndDelete(req.params.id);

    res.status(200).send({
      message: "Gym Deleted successfully.....",
    });
  } catch (error) {
    res.send("error");
  }
};

//get all favoutite gym list
exports.getUserGym = async (req, res) => {
  try {
    const user = req.body.user;
    const userCheck = find({ user: user });
    const question = await userCheck.find();

    res.status(200).send({
      message: "Question Deleted successfully.....",
      data: question,
    });
  } catch (error) {
    res.send("error");
  }
};
