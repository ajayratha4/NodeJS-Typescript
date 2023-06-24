import { Request, Response } from "express";
import { createUserService, getUsersService } from "../services/user.service";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await getUsersService();
    res.send(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.body);
    res.send(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
