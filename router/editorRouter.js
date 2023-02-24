const express = require("express");
const {
  insertEditor,
  updateEditor,
  deleteEditor,
  getAllEditor,
  getSingleEditor,
  getEditorBySearch,
  addSectionEditor,
} = require("../controller/editorController");

const router = express.Router();
// editor qustions
router.post("/add/insert/editor", insertEditor);
router.put("/update/editor/:id", updateEditor);
router.put("/addSection/editor/:id", addSectionEditor);
router.delete("/delete/editor/:id", deleteEditor);
router.get("/allEditor/editor", getAllEditor);
router.get("/singleEditor/editor/:id", getSingleEditor);
router.get("/editor/search", getEditorBySearch);
module.exports = router;

