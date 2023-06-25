import express from "express";
import * as userController from "../controllers/user.controller";
import { authenticate, authorizeRoles } from "../middleware/auth.middleware";
import { UserRole } from "@prisma/client";

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
  authorizeRoles([UserRole.SUPER_ADMIN, UserRole.ADMIN]),
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
  authorizeRoles([UserRole.SUPER_ADMIN, UserRole.ADMIN]),
  userController.deleteUser
);

export default router;
