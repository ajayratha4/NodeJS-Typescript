import express from "express";
import * as feedController from "../controllers/feed.controller";
import { authenticate, authorizeRoles } from "../middleware/auth.middleware";
import { UserRole } from "@prisma/client";
import { RolePath } from "../middleware/auth.const";

const router = express.Router();

// Define routes for the "/feed" path
router.get(
  "/",
  authenticate,
  authorizeRoles([UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.BASIC]),
  feedController.getFeeds
);

router.post(
  "/create",
  authenticate,
  authorizeRoles([UserRole.SUPER_ADMIN]),
  feedController.createFeed
);

router.delete(
  "/delete/:id",
  authenticate,
  authorizeRoles([UserRole.SUPER_ADMIN, UserRole.ADMIN], RolePath.DeleteFeed),
  feedController.deleteFeed
);

router.post(
  "/assign",
  authenticate,
  authorizeRoles([UserRole.SUPER_ADMIN, UserRole.ADMIN]),
  feedController.assignFeed
);

router.post(
  "/dissociate",
  authenticate,
  authorizeRoles([UserRole.SUPER_ADMIN, UserRole.ADMIN]),
  feedController.dissociateFeed
);

export default router;
