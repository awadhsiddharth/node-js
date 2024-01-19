// Nodemailer module- it makes it easy to send emails from your computer.
// can be donwloaded from & installed from- npm install nodemailer

// to include nodemailer module, use below line

// for sending mail use below steps 
// Step-1: include nodemailer module 

var nodemailer = require('nodemailer');

// Step-2: Send an Email 

var transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: 'youemail@gmail.com',
        pass: 'yourpassword'
    }
});

var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@gmail.com',
    // to: 'myfriend1@gmail.com','myfriend2@gmal.com',
    subject: 'Seningd Email suing node.js nodemailer module',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Email sent:` + info.response);
    }
});

