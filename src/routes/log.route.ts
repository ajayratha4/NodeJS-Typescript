import express from "express";
import * as logController from "../controllers/log.controller";
import { authenticate, authorizeRoles } from "../middleware/auth.middleware";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.get(
  "/",
  authenticate,
  authorizeRoles([UserRole.SUPER_ADMIN]),
  logController.getLogs
);

export default router;
