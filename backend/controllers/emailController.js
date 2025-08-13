// import nodemailer from "nodemailer";

// const contactFeedback = async (req, res) => {
//   const { fullname, email, message } = req.body;

//   try {
//     const transporter = nodemailer.createTransport({
//       service: "smtp.office365.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.OUTLOOK_EMAIL,
//         pass: process.env.OUTLOOK_PASSWORD,
//       },
//     });

//     const mailOptions = {
//       from: process.env.OUTLOOK_EMAIL,
//       to: email,
//       subject: "Confirmation of Your Message",
//       text: `Hello ${fullname}, \n\n Thank you for contacting us! \n\n Your message : "${message}" \n\n We will get back to you as soon as possible. \n\n Best Regards, \n Auxry Store Team`,
//     };

//     await transporter.sendMail(mailOptions);

//     res
//       .status(200)
//       .json({ message: "ConConfirmation email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ error: "Failed to send email." });
//   }
// };

// export { contactFeedback };

import nodemailer from "nodemailer";

const contactFeedback = async (req, res) => {
  const { fullname, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Auxry Store" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "We have recieved your message! ",
    html: `<h2>Hi ${fullname},</h2>
               <p>Thank you reaching out to Auxry Store. We have recieved your message and will get back to you as soon as possible.</p>
               <p> <b>Your Message: </b> ${message}</p>
               <p>In the meantime, feel free to check out our <a href="http://localhost:5173/">Store</a>. </p>
               <p>Best Regards,</p>
               <p>The Auxry Store Team</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Confirmation email sent successfully" });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ message: "Failed to send confirmation email" });
  }
};

export { contactFeedback };
