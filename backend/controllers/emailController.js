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

// import nodemailer from "nodemailer";

// const contactFeedback = async (req, res) => {
//   const { fullname, email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: `"Auxry Store" <${process.env.EMAIL_USER}>`,
//     to: email,
//     subject: "We have recieved your message! ",
//     html: `<h2>Hi ${fullname},</h2>
//                <p>Thank you reaching out to Auxry Store. We have recieved your message and will get back to you as soon as possible.</p>
//                <p> <b>Your Message: </b> ${message}</p>
//                <p>In the meantime, feel free to check out our <a href="http://localhost:5173/">Store</a>. </p>
//                <p>Best Regards,</p>
//                <p>The Auxry Store Team</p>`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Confirmation email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email: ", error);
//     res.status(500).json({ message: "Failed to send confirmation email" });
//   }
// };

// export { contactFeedback };

import nodemailer from "nodemailer";

const contactFeedback = async (req, res) => {
  const { fullname, email, message, address, city, state, zip } = req.body;

  if (!fullname || !email || !message) {
    return res.status(400).json({
      message:
        "Missing required fields: fullname, email, and message are required",
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("SMTP connection verified successfully");

    const mailOptions = {
      from: `"Auxry Store" <help.auxrystore@gmail.com>`,
      to: email,
      subject: "We have received your message!",
      html: `<h2>Hi ${fullname},</h2>
             <p>Thank you for reaching out to Auxry Store. We have received your message and will get back to you as soon as possible.</p>
             <p><b>Your Message:</b> ${message
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;")}</p>
             <p><b>Address:</b> ${address || "Not provided"}, ${
        city || "Not provided"
      }, ${state || "Not provided"} ${zip || "Not provided"}</p>
             <p>In the meantime, feel free to check out our <a href="http://localhost:5173/">Store</a>.</p>
             <p>Best Regards,</p>
             <p>The Auxry Store Team</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Confirmation email sent to:", email);
    res.status(200).json({ message: "Confirmation email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    let errorMessage = "Failed to send confirmation email";
    if (error.code === "EAUTH") {
      errorMessage =
        "Invalid email credentials. Ensure the App Password is correct and has no spaces.";
    } else if (error.code === "ENOTFOUND") {
      errorMessage = "Cannot connect to Gmail SMTP server.";
    }
    res.status(500).json({ message: errorMessage });
  }
};

export { contactFeedback };
