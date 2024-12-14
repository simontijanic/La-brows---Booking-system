const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.GMAIL_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

exports.sendMail = (toUser, subjectUser, textUser) => {
    const mailOptions = {
      from: `"LA BROWS" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Owner's email
      subject: subjectUser,
      text: textUser,
    };
  
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
      } else {
        console.log("Email sent: %s", info.messageId);
      }
    });
  };
  
  