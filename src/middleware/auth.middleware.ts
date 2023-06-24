import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const token = req.headers.authorization?.split(" ")[1];

    // if (!token) {
    //   throw new Error("Unauthorized");
    // }

    // const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as {
    //   userId: number;
    // };

    // const user = await prisma.user.findUnique({
    //   where: { id: decodedToken.userId },
    // });

    // if (!user) {
    //   throw new Error("Unauthorized");
    // }

    // req.user = user;
    next();
  } catch (error) {
    next(new Error(error.message));
  }
};

export const authorizeRoles = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // const { role } = req.user;

    // if (!roles.includes(role)) {
    //   next(new Error("Forbidden"));
    // }

    next();
  };
};
