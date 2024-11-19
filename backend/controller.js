const nodemailer = require("nodemailer");
require("dotenv").config();

let handleContact = async (req, res) => {

  const {
    fname,
    Lname,
    phone,
    email,
    fonction,
    enterprise,
    object,
    message
  } = req.body;


  // Email content
  let mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: "Contact Form Query from Digitally",
    text: `
            Name: ${fname} ${Lname}
            Phone No: ${phone}
            Email: ${email}
            Fonction: ${fonction}
            Enterprise: ${enterprise}
            Objet: ${object}
            Message: ${message}
          `,
  };

  // Nodemailer setup
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    logger: true,
    debug: true,
  });

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Contact request sent successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to send the Contact request." });
  }
};

module.exports = { handleContact };
