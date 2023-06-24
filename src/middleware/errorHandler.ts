import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500;
  let message = err.message || "Internal Server Error";

  res.status(statusCode).json({ error: message });
};
