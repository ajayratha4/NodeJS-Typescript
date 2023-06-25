import express, { Request, Response } from "express";
import * as feedController from "../controllers/feed.controller";

const router = express.Router();

// Define routes for the "/feed" path
router.get("/", feedController.getFeeds);

export default router;
