import { UserRole } from "@prisma/client";
import express from "express";
import auth from "../../middlewares/auth";
import { MetaController } from "./meta.controller";

const router = express.Router();

router.get(
  "/",
  auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT),
  MetaController.fetchDashboardMetaData
);

export const MetaRoutes = router;
