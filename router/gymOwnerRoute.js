const express = require("express");

const {
  insertGymOwner,
  loginGymOwners,
  getAllGymOwners,
  getGymOwnersBySearch,
  updateGymOwners,
  deleteGymOwners,verifygymowner, sendemailToOwner
} = require("../controller/gymOwnerController");
const { gymownerupload } = require("../middeleware/imageUpload");

// const { gymownerupload } = require("../middeleware/imageUpload");

const router = express.Router();

router.post("/gymowner/sendemail", sendemailToOwner);
router.get("/gymowner/verify/:token", verifygymowner);

router.post(
  "/gymowner/registration",
  gymownerupload.fields([
    {
      name: "idproofimg",
      maxCount: 10,
    },
    {
      name: "profileimg",
      maxCount: 10,
    },
    {
      name: "gymImg",
      maxCount: 10,
    },
    {
      name: "gymAccessImg",
      maxCount: 10,
    },
  ]),
  insertGymOwner
);
router.post("/gymowner/login", loginGymOwners);
router.get("/allgymowner", getAllGymOwners);
router.get("/gymownersearch", getGymOwnersBySearch);
router.put("/updategymowner/:id", updateGymOwners);
router.delete("/deletegymowner/:id", deleteGymOwners);

module.exports = router;
