const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname,"src")));

app.post('/contact',function (request, response){
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          /*Use dot environment variables*/
            user: "mos******ne@gmail.com", 
            pass: "*********"
        }
    });

    var textBody =`FROM: ${request.body.fullname};
    EMAIL:${request.body.email}; 
    MESSAGE:${request.body.message}`;
    var htmlBody = `<h3>Hello World</h3><br><p>From: ${request.body.fullname}</p>`

    var mail = {
        from:'mosehlezacharia@gmail.com',
        to: 'nzmosehle@gmail.com',
        subject: 'Mail',
        text: textBody,
        html: htmlBody
    };

    transporter.sendMail(mail,function (err,info){
        if(err){
            console.log(err);
            response.json({message:"ERRRROOOOORRRR"})
        }else{
            response.json({message: `message sent with ID: ${info.messageId}`});
        }
    })
});

app.listen(8000,() => console.log("listening on port 8000"));

/*var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mosehlezacharia@gmail.com',
    pass: 'SalZacRay'
  }
});

var mailOptions = {
  from: 'mosehlezacharia@gmail.com',
  to: 'nzmosehle@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy 2!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});*/