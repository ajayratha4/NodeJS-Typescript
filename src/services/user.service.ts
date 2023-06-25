import { User, UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
import prisma from "../models/prisma.client";
import { hashPassword } from "../utils/utils";

const selectUser = { name: true, id: true, email: true, role: true };

export const getUser = async (whereCondition: Object) => {
  const user = await prisma.user.findUnique({
    where: whereCondition,
    select: selectUser,
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const createUser = async (user: User) => {
  const hashedPassword = await hashPassword(user.password);
  user.password = hashedPassword;
  return await prisma.user.create({
    data: user,
    select: selectUser,
  });
};

export const updateRole = async (userId: number, role: UserRole) => {
  return await prisma.user.update({
    where: { id: userId },
    data: { role },
    select: selectUser,
  });
};

export const deleteUser = async (userId: number) => {
  return await prisma.user.delete({
    where: { id: userId },
    select: selectUser,
  });
};

export const onStartupCreateCredentials = async () => {
  const localUser = {
    name: "ajay",
    role: UserRole.SUPER_ADMIN,
    email: "ajayratha@gmail.com",
    password: "123",
  };
  try {
    try {
      await getUser({ email: localUser.email });
      console.log(localUser);
    } catch (error) {
      await createUser(localUser as User);
      console.log(localUser);
    }
  } catch (error) {
    console.log(error.message);
  }
};
