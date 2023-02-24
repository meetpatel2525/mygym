const Editor = require("../models/editorModel");
const { base64encode, base64decode } = require("nodejs-base64");

// create editor
exports.insertEditor = async (req, res) => {
  
  try {

    let { pagename, sections } = req.body;
    
    // console.log(pagename);
    // console.log(sections[0].content);
    // sections.map((e) => {
    //   base64encode(e.content)
    // })

    // let sec = sections[0]
    // console.log(sec);

    const editor = await Editor.create({
      pagename,
      sections,
    });

    // console.log(editor)
    res.status(200).json({
      message: "Editor added successfully",
      success: true,
      data: editor,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// create editor
exports.addSectionEditor = async (req, res) => {
  try {
    console.log("sections");

    const _id = req.params.id;
    let data = req.body;
    // let encode = (data.sections[0].content);
    // console.log(encode);


    let check = await Editor.findOne({ "sections.section": req.body.section });

    if (check) {
      return res.status(400).json({
        success: false,
        message: "section already exists",
      });
    }

     data.content = base64encode(data.content)

let update ;

 update = {
  $push: {
    sections: data,
  },
};

// console.log(update,"update");

    const editor = await Editor.findByIdAndUpdate(_id, update, {
      new: true,
      runValidators: true,
      userFindAndModify: false,
    });
    // console.log(editor)
    res.status(200).json({
      message: "Editor added successfully",
      success: true,
      data: editor,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// update editor
exports.updateEditor = async (req, res) => {
  try {
    const _id = req.params.id;
    // console.log(req.body.content);
    const newEditorData = {
      pagename: req.body.pagename,
      section: req.body.section,
      slug: req.body.slug,
      content: base64encode(req.body.content),
    };

    const editor = await Editor.findByIdAndUpdate(_id, newEditorData, {
      new: true,
      runValidators: true,
      userFindAndModify: false,
    });

    res.status(200).send({
      message: "Editor Updated successfully.....",
      success: true,
      data: editor,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

//delete Question

exports.deleteEditor = async (req, res) => {
  try {
    await Editor.findByIdAndDelete(req.params.id);

    res.status(200).send({
      message: "Editor Deleted successfully.....",
    });
  } catch (error) {
    res.send("error");
  }
};

//get all Question
exports.getAllEditor = async (req, res) => {
  console.log("hello");
  try {
    let editor = Editor.find();

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;
    const total = await Editor.countDocuments();
    const totalPages = Math.ceil(total / pageSize);
    editor = editor.skip(skip).limit(pageSize);

    // console.log(question,"question");

    if (page > totalPages) {
      return res.status(404).json({
        status: "failed",
        massage: "No data found",
      });
    }

    const result = await editor;

    result.map((data) => {

      data.sections.map((e)=>{
        var dataDecode = base64decode(e.content);
        e.content = dataDecode;
      }
      )
    });

    res.status(200).send({
      message: "Editor listing successfully.....",

      count: result.length,
      page,
      totalPages,
      data: result,
    });
  } catch (error) {
    res.send("error");
  }
};

//search Editor
exports.getSingleEditor = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);

    let editor = await Editor.findById(_id);

    let decodeContent = base64decode(editor.content);
    editor.content = decodeContent;
    // console.log(decodeContent);

    res.status(200).send({
      message: "Editor search successfully.....",
      data: editor,
    });
  } catch (error) {
    res.send("error");
  }
};

// search any type of user
exports.getEditorBySearch = async (req, res) => {
  try {
    const name = req.query.pagename;

    const regfirsname = new RegExp(name, "i"); //this is for we serch meet or Meet or MEET all are same

    // console.log(req,"role");
    // console.log(role, "role");

    let editor = await Editor.find({ pagename: regfirsname });

    // let user2 = await User.find({  lastName: regfirsname , role:regrol});

    res.status(200).send({
      message: "editor listing successfully.....",
      data: editor,
    });
  } catch (error) {
    res.send("error");
  }
};
