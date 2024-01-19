var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: 'youemail@gmail.com',
        pass: 'yourpassword'
    }
});

var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'yourpassword',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
}


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Email sent:` + info.response);
    }
});