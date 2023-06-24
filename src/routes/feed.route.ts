import express, { Request, Response } from "express";

const router = express.Router();

// Define routes for the "/feed" path
router.get("/", (req: Request, res: Response) => {
  res.send("List of feed");
});

export default router;
