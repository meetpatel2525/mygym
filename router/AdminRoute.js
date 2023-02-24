const express = require("express");
const { allinquery,addinquery,loginAdmin,allmetrics,addmetrics,editmetrics,insertUser,allusers,allgymowner,alltrainer,allbooking,allgym} = require("../controller/adminController");
const router = express.Router();

router.post("/admin/login", loginAdmin);
router.post("/admin/registration", insertUser);

//get all users for deshbord admin
router.get("/admin/allusers", allusers);
router.get("/admin/allgymowner", allgymowner);
router.get("/admin/allgym", allgym);
router.get("/admin/alltrainer", alltrainer);
router.get("/admin/allbooking", allbooking);

// metriks
router.get("/admin/allmetrics", allmetrics);
router.post("/admin/addmetrics", addmetrics);
router.put("/admin/editmetrics/:id", editmetrics);

//contect us
router.get("/admin/allcontectus", allinquery);
router.post("/admin/addcontectus", addinquery);

module.exports = router;