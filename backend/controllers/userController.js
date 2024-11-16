import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bycrypt from "bcrypt";
import validator from "validator";

// LOGIN USER

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bycrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// CREATE USER TOKEN TO SEND RESPONSE TO USER

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// REGISTER USER

const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.json({ success: false, message: "User already exists" });
    }

    // validating email format & strong  password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please Enter a valid Email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a Strong password ",
      });
    }

    // ENCRYPT ? HASHING PASSWORD

    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    // CREATE NEW USER
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };