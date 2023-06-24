import { Express, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

const middlewares = [
  bodyParser.json(),
  cors(),
  helmet(),
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req.originalUrl);
    next();
  },
];

export const middleware = (app: Express) => {
  [middlewares].forEach((m) => {
    app.use(m);
  });
};
