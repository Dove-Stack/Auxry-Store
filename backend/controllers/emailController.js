import nodemailer from "nodemailer";

const confirmResponse = async (req, res) => {
    const { fullname , email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "outlook",
        auth: {

        }
    })

}

export { confirmResponse }