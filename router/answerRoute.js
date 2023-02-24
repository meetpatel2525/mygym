const express = require("express");
const { insertAns, updateAnswer } = require("../controller/answerController");
const router = express.Router();

router.post("/add/answer", insertAns);
router.put("/update/answer", updateAnswer);

module.exports = router;