const express = require("express");
const {
  createbooking,getbookingadmin,getbookingBySearch
} = require("../controller/booking");

const router = express.Router();

router.post("/bookgym", createbooking);
// router.put("/update/gym/:id", updateGym);
// router.delete("/delete/gym/:id", deleteGym);
// router.get("/get/filtergym/", getGym);
router.get("/get/booking", getbookingadmin);
router.get("/get/searchbooking", getbookingBySearch);




module.exports = router;
