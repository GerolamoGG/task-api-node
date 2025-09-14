import taskRoutes from "./taskRoutes.js";
import { Router } from "express";
import { healthCheck } from "../controllers/healthController.js";

const router = Router();

// Rota de verificação de saúde da API
router.get("/health", healthCheck);
router.use("/tasks", taskRoutes);

export default router;
