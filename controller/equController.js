const Equipment = require("../models/gymEqu");

//insert equipment
exports.insertEqu = async (req, res) => {
  try {
    const { equipmentName } = req.body;
    let equipment = await Equipment.findOne({ equipmentName: equipmentName });
    if (equipment) {
      return res.status(200).json({
        success: false,
        message: "Equipment already exists",
      });
    }
    equipment = await Equipment.create({
      equipmentName,
    });
    res.status(200).json({
      message: "Equipment added successfully....",
      data: equipment,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// update equipment
exports.updateEquipment = async (req, res) => {
  try {
    const _id = req.params.id;
    const newEquData = {
      equipmentName: req.body.equipmentName,
    };
    const equipment = await Equipment.findByIdAndUpdate(_id, newEquData, {
      new: true,
      runValidators: true,
      userFindAndModify: false,
    });

    res.status(200).send({
      message: "Equipment Updated successfully.....",
      data: equipment,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

//delete equipment
exports.deleteEqu = async (req, res) => {
  try {
    await Equipment.findByIdAndDelete(req.params.id);

    res.status(200).send({
      message: "Equipment Deleted successfully.....",
    });
  } catch (error) {
    res.send("error");
  }
};

// get all equipment
exports.getEqu = async (req, res) => {
  try {
    let equipment = Equipment.find();
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * pageSize;
    const total = await Equipment.countDocuments();
    const totalPages = Math.ceil(total / pageSize);

    equipment = equipment.skip(skip).limit(pageSize);

    if (page > totalPages) {
      return res.status(404).json({
        status: "failed",
        massage: "No data found",
      });
    }
    const result = await equipment;
    res.status(200).send({
      message: "Gym listing successfully.....",

      count: result.length,
      page,
      totalPages,
      data: result,
    });
  } catch (error) {
    res.send("error");
  }
};

// get single equipment
exports.singlegetEqu = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  try {
    //user store the all data of that id
    const product = await Equipment.findById(id);
    res.json(product);
  } catch (error) {
    res.json({ message: console.error.message });
  }
};

//search equipment
exports.getEquBySearch = async (req, res) => {
  try {
    const equipmentName = req.query.equipmentName;

    const serchquip = new RegExp(equipmentName, "i"); //this is for we serch meet or Meet or MEET all are same

    const equipment = await Equipment.find({ equipmentName: serchquip });

    res.status(200).send({
      message: "equipment listing successfully.....",
      data: equipment,
    });
  } catch (error) {
    res.send("error");
  }
};
