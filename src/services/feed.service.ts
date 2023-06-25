import { Feed, User, UserRole } from "@prisma/client";
import prisma from "../models/prisma.client";

export const getfeeds = async (user: User) => {
  const { role, id } = user;

  if (role === UserRole.SUPER_ADMIN) {
    return await prisma.feed.findMany();
  } else {
    return await prisma.feed.findMany({
      where: { users: { some: { id } } },
    });
  }
};

export const createFeed = async (feed: Feed, user: User) => {
  const feedData = await prisma.feed.create({ data: feed });
  await prisma.user.update({
    data: { feeds: { connect: { id: feedData.id } } },
    where: { id: user.id },
  });

  return feedData;
};

export const deleteFeed = async (feedId: number) => {
  return await prisma.feed.delete({
    where: { id: feedId },
  });
};

export const assignFeed = async (
  userId: number,
  assignUserId: number,
  feedId: number
) => {
  const checkFeed = await prisma.feed.findFirst({
    where: {
      users: { some: { id: userId } },
      id: feedId,
    },
  });

  if (checkFeed) {
    await prisma.user.update({
      data: { feeds: { connect: { id: feedId } } },
      where: { id: assignUserId },
    });
    return { message: `successfully assign` };
  } else {
    throw new Error("User does not have access to assign feeds");
  }
};

export const dissociateFeed = async (
  userId: number,
  assignUserId: number,
  feedId: number
) => {
  const checkFeed = await prisma.feed.findFirst({
    where: {
      users: { some: { id: userId } },
      id: feedId,
    },
  });

  if (checkFeed) {
    await prisma.user.update({
      where: { id: assignUserId },
      data: {
        feeds: {
          disconnect: [{ id: feedId }],
        },
      },
    });
    return {
      message: `successfully dissociated`,
    };
  } else {
    throw new Error("User does not have access to assign feeds");
  }
};
