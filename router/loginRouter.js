const express = require("express");
const { loginAll } = require("../controller/LoginController");

const router = express.Router();

router.post("/allEmail/login", loginAll);

module.exports = router;