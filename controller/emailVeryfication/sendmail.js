const nodemailer = require("nodemailer");

const sendEmail = async (options) => {


// console.log(options,"options");

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host:'smtp.ethereal.email',
    port:587,
    secure:false,
    auth: {
      user: "raju.smarttechnica@gmail.com",
      pass: "eglnwjtvdgxiisrg",
    },
   
    tls:{
      rejectUnauthorized:false
    }
  });

  const mailOptions = {
    
    from:'"gymsystem" <noreply@gymsystem.com>', // sender address,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

 await transporter.sendMail(mailOptions)
};

module.exports = sendEmail;