import { NextFunction, Request, Response } from "express";
import * as feedService from "../services/feed.service";

export const getFeeds = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = parseInt(req.params.id);

    const feeds = await feedService.getfeeds(userId);
    res.send(feeds);
  } catch (error) {
    next(new Error(error.message));
  }
};
