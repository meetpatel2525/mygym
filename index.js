const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var cors = require("cors");
const user = require("./router/userRoute");
const admin = require("./router/AdminRoute");
const trainer = require("./router/trainerRout");
const gymowner = require("./router/gymOwnerRoute");
const question = require("./router/questionRoute");
const gym = require("./router/gymRouter");
const favgym = require("./router/favGymRoute");
const equipment = require("./router/equipmentRoute");
const answer = require("./router/answerRoute");
const booking = require("./router/booking")
const editor = require("./router/editorRouter");
const login = require("./router/loginRouter");
// const url = "mongodb+srv://user:93y7HbhgZO0e3644@crudd.ijdux.mongodb.net/gymsystem";
// const url = "mongodb://localhost/Gym-system";
const url = "mongodb+srv://meetpatel:meetpatel@cluster0.r6fczjy.mongodb.net/gymsystem";
require("dotenv").config();
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;
mongoose.connect(url);
const con = mongoose.connection;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/v1", user);
app.use("/api/v1", trainer);
app.use("/api/v1", question);
app.use("/api/v1", gym);
app.use("/api/v1", favgym);
app.use("/api/v1", equipment);
app.use("/api/v1", answer);
app.use("/api/v1", booking);
app.use("/api/v1", gymowner);
app.use("/api/v1", admin);
app.use("/api/v1", editor);
app.use("/api/v1", login);


// hear we use multer for  store and uplode image //multer is middlwer
//store is use for store 
//  var gymstorage = multer.diskStorage({
//   destination: function (req, file, cb){
//    //hear we defain the pathe where img is uplode 
//     cb(null, 'uploads/gym')
//   },
//   filename: function (req, file, cb) {

//     //hear we defain  what is the name of the file 
//     cb(null, Date.now() + '_'+ file.originalname )
//   }
// })

//for uplode image in file

// var upload = multer({  storage: gymstorage });

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

con.on("open", () => {
    console.log("connected sucessfully....")
});

app.listen(port, () => console.log(`app listening on port ${port}!`));