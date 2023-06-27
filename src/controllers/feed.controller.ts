import { NextFunction, Request, Response } from "express";
import * as feedService from "../services/feed.service";

export const getFeeds = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const feeds = await feedService.getfeeds(req.user);
    res.send(feeds);
  } catch (error) {
    next(new Error(error.message));
  }
};

export const createFeed = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const feed = req.body;

    const newFeed = await feedService.createFeed(feed, req.user);
    res.send(newFeed);
  } catch (error) {
    next(new Error(error.message));
  }
};

export const deleteFeed = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = parseInt(req.params.id);

    const feed = await feedService.deleteFeed(userId);
    res.status(200).json({ message: `successfully delete the ${feed.name}` });
  } catch (error) {
    next(new Error(error.message));
  }
};

export const assignFeed = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { feedId, userId, canDeletebleFeeds } = req.body;
  if (!feedId || !userId) {
    throw new Error("Invalid arguments feedId or userId");
  }
  try {
    const feed = await feedService.assignFeed(
      req.user.id,
      userId,
      feedId,
      canDeletebleFeeds
    );
    res.send(feed);
  } catch (error) {
    next(new Error(error.message));
  }
};

export const dissociateFeed = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { feedId, userId } = req.body;
  if (!feedId || !userId) {
    throw new Error("Invalid arguments feedId or userId");
  }
  try {
    const feed = await feedService.dissociateFeed(req.user.id, userId, feedId);
    res.send(feed);
  } catch (error) {
    next(new Error(error.message));
  }
};
