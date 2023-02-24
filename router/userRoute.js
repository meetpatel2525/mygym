const express = require("express");
const {
  insertUser,
  loginUser,
  getAllUser,
  updateUser,
  getUserBySearch,
  deleteUser,
  verifyuser,
  feedback,
  getfeedback,
  sendemailTouser
} = require("../controller/userController");

const { userupload } = require("../middeleware/imageUpload");

const router = express.Router();


router.post("/user/sendemail", sendemailTouser);
router.get("/user/verify/:token", verifyuser);

router.post(
  "/user/registration",
  userupload.fields([
    {
      name: "idproofimg",
      maxCount: 10,
    },
    {
      name: "profileimg",
      maxCount: 10,
    },
  ]),
  insertUser
);

router.post("/user/login", loginUser);
router.get("/alluser", getAllUser);
router.get("/usersearch", getUserBySearch);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);
router.post("/admin/user/feedback", feedback);
router.get("/admin/user/getfeedback", getfeedback);

module.exports = router;
