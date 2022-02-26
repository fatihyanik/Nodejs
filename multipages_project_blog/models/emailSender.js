const nodemailer = require('nodemailer');
require('dotenv').config();

// create transporter object which contains email host configuration
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_HOST_PORT,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

 //Promise Solution
function sendEmail(emailData) {
    return new Promise((resolve, reject) => {
        const mailOption = {
            from: process.env.APP_EMAIL,
            to: process.env.CONTACT_EMAIL,
            subject: 'Email from your website',
            html: `
            <h1>email from contact page in your website</h1>
            <p><strong>Name:</strong> ${emailData.name}</p>
            <p><strong>email:</strong> ${emailData.email}</p>
            <p><strong>department:</strong> ${emailData.department}</p>
            <p>${emailData.message}</p>
            `
        }
        transporter.sendMail(mailOption, (err, info) => {
            console.log(info);
            if(err) {
                reject(err)
            } else {
                resolve(info)
            }
        })
    })
    
}

  module.exports = {
    sendEmail
}