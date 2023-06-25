import { NextFunction, Request, Response } from "express";
import { readLogs } from "../logs";

export const getLogs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await readLogs();
    res.send(user);
  } catch (error) {
    next(new Error(error.message));
  }
};
