import { Router } from "express";
import {
  listTasks,
  getTask,
  addTask,
  editTask,
  removeTask
} from "../controllers/taskController.js";

const router = Router();

router.get("/", listTasks);
router.get("/:id", getTask);
router.post("/", addTask);
router.put("/:id", editTask);
router.delete("/:id", removeTask);

export default router;
