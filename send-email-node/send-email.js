var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'hardik.vagadiya114562@marwadiuniversity.ac.in',
    pass: 'xxxx'
  }
});

var mailOptions = {
  from: 'hardik.vagadiya114562@marwadiuniversity.ac.in',
  to: 'hardik.vagadiya114562@marwadiuniversity.ac.in',
  subject: 'Sending Email using Node.js',
  text: `Hi Smartherd, thank you.`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.error('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
