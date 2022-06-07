import { Router } from "express";
import {
  getTasks,
  get,
  addTask,
  updateTask,
  deleteTask,
} from "../controllers/task";

const router = Router();

router.get("/", get);
router.get("/tasks", getTasks);
router.post("/tasks", addTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
