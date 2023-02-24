const multer = require("multer");

//uplode gym image 
const gymstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/gym");
  },
  filename: (req, file, cb) => {
    // cb(
    //   null,
    //   new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    // );
    cb(null, Date.now() + '_'+ file.originalname )
  },
});

//uplode gym acess image 
const gymAccessstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/gymAccess");
  },
  filename: (req, file, cb) => {
    // cb(
    //   null,
    //   new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    // );
    cb(null, Date.now() + '_'+ file.originalname )
  },
});


//uplode user 
const userstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/users");
  },
  filename: (req, file, cb) => {
    // cb(
    //   null,
    //   new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    // );
    cb(null, Date.now() + '_'+ file.originalname )
  },
});


//uplode owner document
const ownerstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/owners");
  },
  filename: (req, file, cb) => {
    // cb(
    //   null,
    //   new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    // );
    cb(null, Date.now() + '_'+ file.originalname )
  },
});

//uplode Gym Access document
// const gymAccessStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/owners");
//   },
//   filename: (req, file, cb) => {
//     // cb(
//     //   null,
//     //   new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
//     // );
//     cb(null, Date.now() + '_'+ file.originalname )
//   },
// });


//uplode treiner

const trainerstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/trainer");
  },
  filename: (req, file, cb) => {
    // cb(
    //   null,
    //   new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    // );
    cb(null, Date.now() + '_'+ file.originalname )
  },
});

const filefilter = (req, file, cb) => {
  // if(file.mimetype === 'video/mp4' || file.mimetype === 'video/mkv'){
  //     cb(null,true);
  // }else{
  //     cb(null,false);
  // }
  if (!file.originalname.match(/\.(mp4|webp|MPEG-4|mkv|mov|png|jpg|jpeg|pdf|doc|docx)$/)) {
    return cb(new Error("Please upload a image"));
  }
  cb(undefined, true);
};

//uplode gym img
const gymupload = multer({
  storage: gymstorage,
  limits: { fieldSize: 25 * 1024 * 1024 },
  fileFilter: filefilter,
});

//uplode gym Access
const gymAccessupload = multer({
  storage: gymAccessstorage,
  limits: { fieldSize: 25 * 1024 * 1024 },
  fileFilter: filefilter,
});

//uplode user document
const userupload = multer({
  storage: userstorage,
  limits: { fieldSize: 25 * 1024 * 1024 },
  fileFilter: filefilter,
});

//uplode owner document
const gymownerupload = multer({
  storage: ownerstorage,
  limits: { fieldSize: 25 * 1024 * 1024 },
  fileFilter: filefilter,
});

//uplode owner document
// const gymAccessImgupload = multer({
//   storage: gymAccessStorage,
//   limits: { fieldSize: 25 * 1024 * 1024 },
//   fileFilter: filefilter,
// });


//trainer user document

const trainerupload = multer({
  storage: trainerstorage,
  limits: { fieldSize: 25 * 1024 * 1024 },
  fileFilter: filefilter,
});



module.exports = { gymupload,gymAccessupload,userupload,gymownerupload,trainerupload};
