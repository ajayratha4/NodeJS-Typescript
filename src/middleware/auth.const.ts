import { UserRole } from "@prisma/client";
import { Request } from "express";
import { getUser } from "../services/user.service";
import { checkFeedAccess } from "../services/feed.service";

export enum RolePath {
  CreateUser = "CREATE_USER",
  DeleteUser = "DELETE_USER",
  DeleteFeed = "DELETE_FEED",
}

export const ROLES = {
  SUPER_ADMIN: {
    permissions: [
      {
        path: RolePath.CreateUser,
        can: (req: Request) => {
          const role = req.body.role;
          return role === UserRole.ADMIN || role === UserRole.BASIC;
        },
        error: "you do not have permission to perform this operation",
      },
      {
        path: RolePath.DeleteUser,
        can: (req: Request) => true,
        error: "you do not have permission to perform this operation",
      },
    ],
  },
  ADMIN: {
    permissions: [
      {
        path: RolePath.CreateUser,
        can: (req: Request) => {
          const role = req.body.role;
          return role === UserRole.BASIC;
        },
        error: "you do not have permission to perform this operation",
      },
      {
        path: RolePath.DeleteUser,
        can: async (req: Request) => {
          const user = await getUser({ id: req.user.id });
          return user.role === UserRole.BASIC;
        },
        error: "you do not have permission to perform this operation",
      },
      {
        path: RolePath.DeleteFeed,
        can: async (req: Request) => {
          if (!(req.user.role === UserRole.SUPER_ADMIN)) {
            return await checkFeedAccess(req.user.id, parseInt(req.params.id));
          }
          return true;
        },
        error: "you do not have permission to perform this operation",
      },
    ],
  },
  BASIC: {
    permissions: [
      {
        path: RolePath.CreateUser,
        can: (_req: Request) => false,
        error: "you do not have permission to perform this operation",
      },
      {
        path: RolePath.DeleteUser,
        can: (req: Request) => true,
        error: "you do not have permission to perform this operation",
      },
    ],
  },
};
