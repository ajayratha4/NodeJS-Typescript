import { User } from "@prisma/client";
import prisma from "../models/prisma.client";

export const getUsersService = async () => {
  return await prisma.user.findMany();
};

export const createUserService = async (user: User) => {
  return await prisma.user.create({ data: user });
};
