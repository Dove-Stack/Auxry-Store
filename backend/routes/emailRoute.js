import express from "express";
import { contactFeedback } from "../controllers/emailController.js";

const emailRouter = express.Router();

emailRouter.post("/contact-feedback", contactFeedback);

export default emailRouter;
