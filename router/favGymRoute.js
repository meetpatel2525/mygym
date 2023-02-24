const express = require("express");
const router = express.Router();
const { insertGym, getUserGym, deleteFavGym } = require("../controller/favGymController");

router.post("/add/favgym", insertGym);
router.delete("/delete/favgym/:id", deleteFavGym);
router.post("/get/favgym", getUserGym);

module.exports = router;