const express = require("express");
const {
  insertGym,
  updateGym,
  getGym,
  deleteGym,
  getAllgym,
  getGymUser,
} = require("../controller/gymController");

const {gymupload} = require("../middeleware/imageUpload")
const {gymAccessupload} = require("../middeleware/imageUpload")

const router = express.Router();

router.post('/add/gym', gymupload.fields([
  { name: "mygymAccessfile", maxCount: 10 },
  { name: "mygymfile", maxCount: 10 },
  // { name: "field_name", maxCount: 1 },
  // { name: "field_name", maxCount: 1 }
]),insertGym)

// router.post("/add/gym",gymAccessupload.array("mygymAccessfile"),gymupload.array("mygymfile"),insertGym)

router.put("/update/gym/:id", updateGym);
router.delete("/delete/gym/:id", deleteGym);
router.get("/get/filtergym/", getGym);
router.get("/get/gym/", getAllgym);
router.get("/filter/gym/", getGymUser);

module.exports = router;
