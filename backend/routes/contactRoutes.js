const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const nodemailer = require("nodemailer");

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please provide name, email, and message.' });
  }

  try {
    // Configure transporter (using Gmail)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "madishettibindu1706@gmail.com",   
        pass: "shsl bmfr zncf lkry"     
      }
    });

    // Email content
    await transporter.sendMail({
      from: email,
      to: "madishettibindu1706@gmail.com",      
      subject: `New Contact Form Submission from ${name}`,
      text: message,
    });

    res.status(200).send("Message sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending message");
  }
});

module.exports = router;
