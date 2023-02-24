const express = require("express");
const {
  insertTrainer,
  loginTrainer,
  getAllTrainer,
  getTrainerBySearch,
  deleteTrainer,
  updateTrainer,verifytrainer,sendemailToTrainer
} = require("../controller/trainerController");

const router = express.Router();

const { trainerupload } = require("../middeleware/imageUpload");


router.post("/trainer/sendemail", sendemailToTrainer);
router.get("/trainer/verify/:token", verifytrainer);

router.post(
  "/trainer/registration",
  trainerupload.fields([
    {
      name: "idproofimg",
      maxCount: 10,
    },
    {
      name: "profileimg",
      maxCount: 10,
    },
  ]),
  insertTrainer
);


router.post("/trainer/login", loginTrainer);
router.get("/alltrainer", getAllTrainer);
router.get("/trainersearch", getTrainerBySearch);
router.put("/updatetrainer/:id", updateTrainer);
router.delete("/deletetrainer/:id", deleteTrainer);

module.exports = router;
