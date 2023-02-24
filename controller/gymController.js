const Gym = require("../models/gymModel");

exports.insertGym = async (req, res) => {

  console.log("gymimagesURL");

  try {

    // img request
let gymImages = (req.files) ? req.files:[];



// for gym img
let  gymimagesURL =  gymImages.mygymfile;

// for gym access img
let gymAccessimages = gymImages.mygymAccessfile


  console.log(gymimagesURL.mygymfile,"mygymfile");

  console.log(gymimagesURL.mygymAccessfile,"mygymAccessfile");

  let image = [];
   //  hear we fatch all new image from imagearr and push or add  it in image Array
   gymimagesURL.map((e) => {
    image.push(e.filename);//e.filename becouse we need only name of image so we use .filename 
 });

  let gymAccessURL =  [];
    //  hear we fatch all new image from imagearr and push or add  it in image Array
    gymAccessimages.map((e) => {
      gymAccessURL.push(e.filename);//e.filename becouse we need only name of image so we use .filename 
  });
 

    let {
      accessInstruct,
      gymOwnerEmail,
      gymOwnerContect,
      gymowner_id,
      gymBookingPrice,
      gymEquipment,
      gymCloseTime,
      gymOpenTime,
      gymLong,
      gymLat,
      gymCity,
      gymOwner,
      gymAddress,
      gymName,
      gymOperatingDays,
      gymOperatingHours,
      gymFacilities,
      gymInformation,
      closestMetroStation,
      gymRuls,
      comment,
      personelTrainer,
      refresh_token,
    } = req.body;

// let mydata =  JSON.parse( gymOperatingDays )

    let gym = await Gym.findOne({ gymName: gymName });

    if (gym) {
      return res.status(400).json({
        success: false,
        message: "Gym already exists",
      });
    }

    gymAdd = await Gym.create({
      accessInstruct,
      gymAccessimagesURL:gymAccessURL,
      gymOwnerEmail,
      gymimagesURL:image,
      gymOperatingDays:JSON.parse(gymOperatingDays),
      gymowner_id,
      gymFacilities:JSON.parse(gymFacilities),
      gymInformation,
      closestMetroStation,
      gymRuls:JSON.parse(gymRuls) ,
      comment,
      personelTrainer,
      gymOperatingHours,
      gymOwnerContect,
      gymBookingPrice,
      gymEquipment:JSON.parse(gymEquipment),
      gymCloseTime,
      gymOpenTime,
      gymLong,
      gymCity,
      gymLat,
      gymOwner,
      gymAddress,
      gymName,
      refresh_token,
    });
    res.status(200).json({
      message: "Gym Added successfully",
      data: gymAdd,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

//update gym
exports.updateGym = async (req, res) => {


console.log("gym update called");

  try {

    // img request
    let gymImages = (req.files) ? req.files:[];

    // for gym img
    let  gymimagesURL =  gymImages.mygymfile;
    
    // for gym access img
    let gymAccessimages = gymImages.mygymAccessfile
    
      console.log(gymimagesURL.mygymfile,"mygymfile");
    
      console.log(gymimagesURL.mygymAccessfile,"mygymAccessfile");
    
    
      let image = [];
       //  hear we fatch all new image from imagearr and push or add  it in image Array
       gymimagesURL.map((e) => {
        image.push(e.filename);//e.filename becouse we need only name of image so we use .filename 
     });
    
      let gymAccessURL =  [];
        //  hear we fatch all new image from imagearr and push or add  it in image Array
        gymAccessimages.map((e) => {
          gymAccessURL.push(e.filename);//e.filename becouse we need only name of image so we use .filename 
      });
     

    const { 
      accessInstruct,
      gymOperatingDays,
      gymFacilities,
      gymInformation,
      closestMetroStation,
      gymRuls,
      comment,
      personelTrainer,
      gymOperatingHours,
      gymOwnerContect,
      gymBookingPrice,
      gymEquipment,
      gymCloseTime,
      gymOpenTime,
      gymLong,
      gymCity,
      gymLat,
      gymOwner,
      gymOwnerEmail,
      gymAddress,
      gymName,
      refresh_token,
      gymStatus,
    
    } = req.body;
    const _id = req.params.id;

    const newGymData = {
      gymAccessimagesURL:gymAccessURL,
      gymimagesURL:image,
      accessInstruct:accessInstruct,
      gymOwnerContect: gymOwnerContect,
      gymBookingPrice: gymBookingPrice,
      gymEquipment: gymEquipment,
      gymCloseTime: gymCloseTime,
      gymOpenTime: gymOpenTime,
      gymLong: gymLong,
      gymCity: gymCity,
      gymLat: gymLat,
      gymOwner: gymOwner,
      gymOwnerEmail:gymOwnerEmail,
      gymAddress: gymAddress,
      gymName: gymName,
      gymStatus: gymStatus,
      refresh_token: refresh_token,
      gymOperatingDays:gymOperatingDays,
      gymFacilities:gymFacilities,
      gymInformation:gymInformation,
      closestMetroStation:closestMetroStation,
      gymRuls:gymRuls,
      comment:comment,
      personelTrainer:personelTrainer,
      gymOperatingHours:gymOperatingHours
    };

console.log(newGymData,"newGymData");

    const gym = await Gym.findByIdAndUpdate(_id, newGymData, {
      new: true,
      runValidators: true,
      userFindAndModify: false,
    });

    res.status(200).send({
      message: "Gym Updated successfully.....",
      data: gym,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

//delete gym
exports.deleteGym = async (req, res) => {
  try {
    await Gym.findByIdAndDelete(req.params.id);

    res.status(200).send({
      message: "Gym Deleted successfully.....",
    });
  } catch (error) {
    res.send("error");
  }
};

//get filterd Gym

exports.getGym = async (req, res) => {
  try {
    const gymName = req.query.gymName;

    const serchgymName = new RegExp(gymName, "i"); //this is for we serch meet or Meet or MEET all are same

    const gym = await Gym.find({ gymName: serchgymName });

    res.status(200).send({
      message: "Gym listing successfully.....",
      data: gym,
    });
  } catch (error) {
    res.send("error");
  }
};

//get all gym
exports.getAllgym = async (req, res) => {
  try {
    let gym = Gym.find();
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 2;
    const skip = (page - 1) * pageSize;
    const total = await Gym.countDocuments();
    const totalPages = Math.ceil(total / pageSize);

    gym = gym.skip(skip).limit(pageSize);

    if (page > totalPages) {
      return res.status(404).json({
        status: "failed",
        massage: "No data found",
      });
    }
    const result = await gym;
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

// get filterd gym for user
exports.getGymUser = async (req, res) => {
  try {
    const gymName = req.query.gymName;
    const gymCity = req.query.gymCity;
    const gymPrice = req.query.gymPrice;
    const equipment = req.query.equipment;
    const serchgymName = new RegExp(gymName, "i"); //this is for we serch meet or Meet or MEET all are same
    let gym;
    if (gymName || gymCity || gymPrice || equipment) {
      if (gymName) {
        gym = await Gym.find({
          gymName: serchgymName,
        });
      }
      if (gymCity) {
        gym = await Gym.find({
          gymCity: gymCity,
        });
      }
      if (gymPrice) {
        gym = await Gym.find({
          gymBookingPrice: gymPrice,
        });
      }
      if (equipment) {
        gym = await Gym.find({
          gymEquipment: equipment,
        });
      }
      if (gymName && gymCity && gymPrice && equipment) {
        gym = await Gym.find({
          gymName: serchgymName,
          gymCity: gymCity,
          gymBookingPrice: gymPrice,
          gymEquipment: equipment,
        });
      }
      if (gymName && gymCity && gymPrice) {
        gym = await Gym.find({
          gymName: serchgymName,
          gymCity: gymCity,
          gymBookingPrice: gymPrice,
        });
      }
      if (gymName && gymPrice && equipment) {
        gym = await Gym.find({
          gymName: serchgymName,
          gymBookingPrice: gymPrice,
          gymEquipment: equipment,
        });
      }
      if (gymCity && gymPrice && equipment) {
        gym = await Gym.find({
          gymCity: gymCity,
          gymBookingPrice: gymPrice,
          gymEquipment: equipment,
        });
      }
      if (gymName && gymCity && equipment) {
        gym = await Gym.find({
          gymName: serchgymName,
          gymCity: gymCity,
          gymEquipment: equipment,
        });
      }
      if (gymName && gymCity) {
        gym = await Gym.find({
          gymName: serchgymName,
          gymCity: gymCity,
        });
      }
      if (gymName && gymPrice) {
        gym = await Gym.find({
          gymName: serchgymName,
          gymBookingPrice: gymPrice,
        });
      }
      if (gymName && equipment) {
        gym = await Gym.find({
          gymName: serchgymName,
          gymEquipment: equipment,
        });
      }
      if (gymCity && gymPrice) {
        gym = await Gym.find({
          gymCity: gymCity,
          gymBookingPrice: gymPrice,
        });
      }
      if (gymCity && equipment) {
        gym = await Gym.find({
          gymCity: gymCity,
          gymEquipment: equipment,
        });
      }
      if (gymPrice && equipment) {
        gym = await Gym.find({
          gymBookingPrice: gymPrice,
          gymEquipment: equipment,
        });
      }
    } else {
      gym = await Gym.find({});
    }
    res.status(200).send({
      message: "Gym listing successfully.....",
      data: gym,
    });
  } catch (error) {
    res.send("error");
  }
};
