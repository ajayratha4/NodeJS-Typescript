import prisma from "../models/prisma.client";

export const getfeeds = async (userId: number) => {
  const feed = await prisma.feed.findMany();

  if (feed.length === 0) {
    throw new Error("feeds not found");
  }

  return feed;
};
