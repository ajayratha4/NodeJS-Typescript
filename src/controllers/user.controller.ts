import { NextFunction, Request, Response } from "express";
import * as userService from "../services/user.service";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = parseInt(req.params.id);

    const user = await userService.getUser(userId);
    res.send(user);
  } catch (error) {
    next(new Error(error.message));
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(new Error(error.message));
  }
};

export const updateRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const role = req.body.role;
    const userId = parseInt(req.params.id);

    if (!role) {
      throw new Error("send updated role");
    }

    const newUser = await userService.updateRole(userId, role);
    res.status(200).json(newUser);
  } catch (error) {
    next(new Error(error.message));
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = parseInt(req.params.id);

    const user = await userService.deleteUser(userId);
    res.status(200).json({ message: `successfully delete the ${user.name}` });
  } catch (error) {
    next(new Error(error.message));
  }
};
