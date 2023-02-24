const express = require("express");

const {

  insertUserQuestion,
  updateUserQuestion,
  deleteUserQuestion,
  getUserQuestion,
  singleQue,
  getUserQueBySearch,



} = require("../controller/questionController");

const router = express.Router();

// users qustions 

router.post("/add/user/question", insertUserQuestion);
router.put("/update/user/question/:id", updateUserQuestion);
router.delete("/delete/user/question/:id", deleteUserQuestion);
router.get("/get/user/question/:id", singleQue);
router.get("/get/user/question/", getUserQuestion);
router.get("/user/searcheQuestion", getUserQueBySearch);





module.exports = router;
