// import userModel from "../models/userModel.js";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// import validator from "validator";

// // LOGIN USER

// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await userModel.findOne({ email });

//     if (!user) {
//       return res.json({ success: false, message: "User does not exist" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.json({ success: false, message: "Invalid Credentials" });
//     }

//     const token = createToken(user._id);
//     res.json({ success: true, token });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// // CREATE USER TOKEN TO SEND RESPONSE TO USER

// const createToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET);
// };

// // REGISTER USER

// const registerUser = async (req, res) => {
//   const { name, password, email } = req.body;
//   try {
//     const userExist = await userModel.findOne({ email });
//     if (userExist) {
//       return res.json({ success: false, message: "User already exists" });
//     }

//     // validating email format & strong  password
//     if (!validator.isEmail(email)) {
//       return res.json({
//         success: false,
//         message: "Please Enter a valid Email",
//       });
//     }

//     if (password.length < 8) {
//       return res.json({
//         success: false,
//         message: "Please enter a Strong password ",
//       });
//     }

//     // ENCRYPT ? HASHING PASSWORD

//     // const salt = await bycrypt.genSalt(10);
//     // const hashedPassword = await bycrypt.hash(password, salt);

//     const hashedPassword = await bcrypt.hash(password, 10);

//     // CREATE NEW USER
//     const newUser = new userModel({
//       name: name,
//       email: email,
//       password: hashedPassword,
//     });

//     const user = await newUser.save();
//     const token = createToken(user._id);

//     res.json({ success: true, token });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };

// export { loginUser, registerUser };



import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"; 
import validator from "validator";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d", 
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = createToken(user._id);
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error("❌ Login Error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Validate email and password
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Password must be at least 8 characters long",
        });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    res.status(201).json({ success: true, token });
  } catch (error) {
    console.error("❌ Register Error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
