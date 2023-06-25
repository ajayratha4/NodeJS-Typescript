import express from "express";
import * as authController from "../controllers/auth.controller";

const router = express.Router();

router.post("/", authController.authenticate);

export default router;
