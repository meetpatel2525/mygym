const mongoose = require("mongoose");

const editorSchema = new mongoose.Schema({
  pagename: {
    type: String,
    // required: true,
  },
  sections: [
    {
      content: {
        type: String,
      },
      section: {
        type: String,
      },
    },
  ],
});

editorSchema.set("timestamps", true);

module.exports = mongoose.model("Editor", editorSchema);
