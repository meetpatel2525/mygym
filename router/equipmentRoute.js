const express = require("express");
const router = express.Router();
const {
  updateEquipment,
  insertEqu,
  deleteEqu,
  getEqu,
  getEquBySearch,singlegetEqu
} = require("../controller/equController");

router.post("/add/equipment", insertEqu);
router.put("/update/equipment/:id", updateEquipment);
router.delete("/delete/equipment/:id", deleteEqu);
router.get("/get/equipment/", getEqu);
router.get("/searchequipment", getEquBySearch);
router.get("/get/singlequipment/:id",singlegetEqu);

module.exports = router;
