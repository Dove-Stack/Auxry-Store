// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//   const { token } = req.headers;

//   if (!token) {
//     res.json({ success: false, message: "Not Authorized ! Login Again" });
//   }

//   try {
//     const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//     req.body.userId = token_decode.id;
//     next();
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error with Authorization" });
//   }
// };

// export default authMiddleware;

import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Not authorized! Please login again." });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).json({
      success: false,
      message: "Invalid or expired authorization token",
    });
  }
};

export default authMiddleware;
