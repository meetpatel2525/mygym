const Booking = require("../models/booking");
const Gym = require("../models/gymModel");
//insert answer

const { google } = require("googleapis");
const GOOGLE_CLIENT_ID =
  "277228600812-asdnr42soemgucaefgla9vdnkduku26u.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const oauth2Client = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    "http://localhost:3000"
    //  "https://gymsystemmern.herokuapp.com"
)

// refresh_token: "1//0g5mAvYTIm_7ZCgYIARAAGBASNwF-L9Ir_DnyCWkOqJ-6SO-TaoWy9PuS8Dj8aAuU3n51aYGjuk3krhKTLC0eCRerfWF3YYiZoqM"


// gym book by user 

exports.createbooking = async (req, res) => {
  // console.log("post called");

    try {

        const {
            gymName,
            gymOwner,
            gymOwnerEmail,
            location,
            description,
            summary,
            start,
            end,
            fees,
            paymentStatus,
            username,
            userEmail
        } = req.body;

        let owner_exist = await Gym.findOne({ gymName: gymName});
// gym is avibale or not

        if (!owner_exist) {
          return res.status(400).json({
            success: false,
            message: "Gym not faund",
          });
        }

        // faind the start and end time booking of uasers 

        let sloteavilable = await Booking.find({
            start:{$lt:end},
            end:{$gt:start}}
            )

            // slote check after book 4 slotes 

    if (sloteavilable.length >= 5) {
        return res.status(400).json({
          success: false,
          message: "Gym is full",
          data:sloteavilable.length
        });
      }

// gym timing check befor book 

      let gymtime = await Gym.find({gymName:gymName,
        gymOpenTime:{$gt:start.slice(11,22)},
        gymCloseTime:{$lt:end.slice(11,22)}
      }
        )

// gym timing check after book 
      
if(gymtime.length >=1 ) {

        return res.status(400).json({
          success: false,
          message: "Gym timing is not available ",
          // data:gymCloseTime.length
        });
      }

          oauth2Client.setCredentials({refresh_token:owner_exist.refresh_token})

            const calendar = google.calendar('v3');
            
            const responce = await calendar.events.insert({
                auth:oauth2Client,
                calendarId:"primary",
                requestBody:{
                    summary:summary,
                    description:description,
                    location:location,
                    'attendees': [
                        {'email': userEmail},
                        // {'email': 'sayog.smarttechnica@gmail.com'}
                      ],
                    colorId:6,
                    
                    start:{dateTime:
                        new Date(start)
                    },
                    end:{dateTime: new Date(end)}
                }
            }) 

            // console.log(responce.data,"responce come");

if(responce){

    // console.log(responce.data,"responce come");

    try {

  createbooking = await Booking.create({
    userEmail:userEmail,
    username:username,
        gymName:gymName,
        gymOwner:gymOwner,
        gymOwnerEmail:gymOwnerEmail,
        location:responce.data.location,
        description:responce.data.description,
        summary:responce.data.summary,
        start:start,
        end:end,
        fees:fees,
        paymentStatus:true,
        htmlLink:responce.data.htmlLink
    });

    // console.log(createbooking,"create dfata base ");

    res.status(200).json({
      message: "booking successfully",
      data: createbooking,

    });

} catch (error) {
    res.status(400).send(error);
  }


}else{
    res.send({message:"booking fail"})
}
     
      

      } catch (error) {
        res.status(400).send(error);
      }


};

// get booking on admin penal

exports.getbookingadmin = async (req, res) => {
 

console.log("get booking called ");

  try {

    let booking = Booking.find();
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 2;
    const skip = (page - 1) * pageSize;
    const total = await Booking.countDocuments();
    const totalPages = Math.ceil(total / pageSize);

    booking = booking.skip(skip).limit(pageSize);

    if (page > totalPages) {
      return res.status(404).json({
        status: "failed",
        massage: "No data found",
      });
    }

    const result = await booking;
    res.status(200).send({
      message: "Gym listing successfully.....",

      count: result.length,
      page,
      totalPages,
      data: result,
    });

  } catch (error) {
    res.send("error");
  }
};

// search booking by gym name 
exports.getbookingBySearch = async (req, res) => {

  try {

    const equipmentName = req.query.gymbookingName;

    const serchquip = new RegExp(equipmentName, "i"); //this is for we serch meet or Meet or MEET all are same


    const booking = await Booking.find({ equipmentName: serchquip });

    res.status(200).send({
      message: "equipment listing successfully.....",
      data: booking,
    });
  } catch (error) {
    res.send("error");
  }
};



