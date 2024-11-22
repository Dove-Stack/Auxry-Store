import express from "express";
import { confirmResponse } from "../controllers/emailController.js";

const emailRouter = express.Router();

emailRouter.post("/confirm-response", confirmResponse);

export default emailRouter;
