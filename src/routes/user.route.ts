import express from "express";
import * as userController from "../controllers/user.controller";
import { authenticate, authorizeRoles } from "../middleware/auth.middleware";
import { UserRole } from "@prisma/client";
import { RolePath } from "../middleware/auth.const";

const router = express.Router();

router.get(
  "/:id",
  authenticate,
  authorizeRoles([UserRole.SUPER_ADMIN]),
  userController.getUser
);
router.post(
  "/create",
  authenticate,
  authorizeRoles([UserRole.SUPER_ADMIN, UserRole.ADMIN], RolePath.CreateUser),
  userController.createUser
);
router.put(
  "/role/:id",
  authenticate,
  authorizeRoles([UserRole.SUPER_ADMIN]),
  userController.updateRole
);
router.delete(
  "/delete/:id",
  authenticate,
  authorizeRoles([UserRole.SUPER_ADMIN, UserRole.ADMIN], RolePath.DeleteUser),
  userController.deleteUser
);

export default router;
