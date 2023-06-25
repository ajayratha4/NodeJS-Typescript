import { NextFunction, Request, Response } from "express";
import prisma from "../models/prisma.client";
import { comparePassword, generateToken } from "../utils/utils";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      throw new Error("Invalid arguments email or password");
    }

    const user = await prisma.user.findUnique({ where: { email: email } });
    if (!user) {
      throw new Error("Invalid email ");
    }
    const isSamePassword = await comparePassword(password, user.password);

    if (!isSamePassword) {
      throw new Error("Invalid password");
    }
    const token = generateToken(user.id);

    res.send({ user: { ...user, password: password }, token });
  } catch (error) {
    next(new Error(error.message));
  }
};
