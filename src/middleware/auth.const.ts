import { UserRole } from "@prisma/client";
import { Request } from "express";

export const ROLES = {
  SUPER_ADMIN: {
    permissions: [
      {
        path: "/create",
        can: (req: Request) => {
          const role = req.body.role;
          return role === UserRole.ADMIN || role === UserRole.BASIC;
        },
        error: "you do not have permission to perform this operation",
      },
    ],
  },
  ADMIN: {
    permissions: [
      {
        path: "/create",
        can: (req: Request) => {
          const role = req.body.role;
          return role === UserRole.BASIC;
        },
        error: "you do not have permission to perform this operation",
      },
    ],
  },
  BASIC: {
    permissions: [
      {
        path: "/create",
        can: (_req: Request) => false,
        error: "you do not have permission to perform this operation",
      },
    ],
  },
};
